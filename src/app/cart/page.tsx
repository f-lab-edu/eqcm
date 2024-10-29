'use client';

import React, { memo, Suspense, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import cn from 'classnames';
import ShoppingStepIndicator from '@/components/common/shoppingStepIndicator';
import OptionStepper from '@/components/product/optionStepper';
import LoadingSpinner from '@/components/common/loadingSpinner';
import { OPTION_NAME } from '@/constants/cart';
import { formatWithCommas } from '@/utils/format';
import { CartData } from '@/mocks/data';
import { Icons } from '@/components/icons';
import { deleteCartItems, fetchCartData, updateCartItem } from '@/fetch';
import { CartDataType } from '@/types/cart';
import { Options } from '@/types/product';

type Props = {
  data: CartDataType;
};

type ItemTableProps = Props & {
  allCheckedItems: number[];
  selectedItems: number[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
};

type TotalPriceTableProps = Props & {
  itemCount: number;
};

type CheckBoxProps = {
  checked: boolean;
  onChange: () => void;
};

const Cart = () => {
  return (
    <Suspense fallback={<LoadingContent />}>
      <MainContent />
    </Suspense>
  );
};

const LoadingContent = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[50px] pb-[200px]">
      <ShoppingStepIndicator step="SHOPPING_BAG" />
      <div className="my-[100px]">
        <LoadingSpinner />
      </div>
    </div>
  );
};

const MainContent = () => {
  const { data } = useSuspenseQuery({
    queryKey: [`cart`],
    queryFn: fetchCartData,
    staleTime: 60000,
  });

  return (
    <div className="px-[50px] pb-[200px]">
      <ShoppingStepIndicator step="SHOPPING_BAG" />

      <div className="w-full max-w-[1500px] mx-auto">
        {data.items.length ? <CartItems data={data} /> : <EmptyCart />}
      </div>
    </div>
  );
};

const EmptyCart = memo(function EmptyCart() {
  return (
    <div className="flex flex-col gap-[45px] items-center py-[100px] border-t-[4px] border-black border-b-[1px]">
      <p className="text-[32px] font-[500]">장바구니에 담은 상품이 없습니다.</p>
      <Link href={'/'}>
        <button
          type="button"
          className="inline-block w-[400px] h-[72px] mx-1 border border-[#303033] hover:text-[#ff4800] text-[26px] font-[600]"
        >
          CONTINUE SHOPPING
        </button>
      </Link>
    </div>
  );
});

const CartItems = memo(function CartItems({ data }: Props) {
  const queryClient = useQueryClient();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [allCheckedItems, setAllCheckedItems] = useState<number[]>([]);

  useEffect(() => {
    const itemIds = data.items.map((item) => item.cartItemId);
    setAllCheckedItems(itemIds);
    setSelectedItems(itemIds);
  }, [data.items]);

  const deleteItemsMutation = useMutation({
    mutationFn: (cartItemIds: number[]) => deleteCartItems(cartItemIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  return (
    <div>
      <ItemTable
        data={data}
        allCheckedItems={allCheckedItems}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />

      <div className="flex justify-between items-center text-[15px] mt-[30px]">
        <div>
          <button
            className="w-[130px] h-[42px] border"
            onClick={() => {
              deleteItemsMutation.mutate(selectedItems);
            }}
          >
            선택상품 삭제
          </button>
          <button className="w-[130px] h-[42px] ml-5 border">
            품절상품 삭제
          </button>
        </div>
        <p>장바구니는 최대 100개의 상품을 담을 수 있습니다.</p>
      </div>

      <TotalPriceTable data={data} itemCount={selectedItems.length} />

      <div className="h-[72px] text-center text-[26px] font-[600]">
        <Link href={'/'}>
          <button
            type="button"
            className="inline-block w-[400px] h-full mx-1 border border-[#303033] hover:text-[#ff4800]"
          >
            CONTINUE SHOPPING
          </button>
        </Link>
        {data && (
          <button
            type="button"
            className="w-[400px] h-full mx-1 border bg-black border-black text-white hover:text-[#ff4800]"
          >
            CHECK OUT
          </button>
        )}
      </div>
    </div>
  );
});

const ItemTable = ({
  data,
  allCheckedItems,
  selectedItems,
  setSelectedItems,
}: ItemTableProps) => {
  const queryClient = useQueryClient();
  const isAllChecked = data.items.length === selectedItems.length;

  const getOptionName = useCallback((options: Record<Options, string>) => {
    return Object.entries(options)
      .map(([key, value]) => `${OPTION_NAME[key as Options]} ${value}`)
      .join(', ');
  }, []);

  const onChangeCheckItem = useCallback(
    (id: number) => {
      if (selectedItems.includes(id)) {
        const newSelectedItems = selectedItems.filter((_id) => _id !== id);
        setSelectedItems(newSelectedItems);
      } else {
        setSelectedItems((prev) => [...prev, id]);
      }
    },
    [selectedItems, setSelectedItems],
  );

  const updateItemMutation = useMutation({
    mutationFn: ({
      cartItemId,
      count,
    }: {
      cartItemId: number;
      count: number;
    }) => updateCartItem(cartItemId, count),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  const updateItemCount = (cartItemId: number, count: number) => {
    updateItemMutation.mutate({ cartItemId, count });
  };

  return (
    <table className="w-full border-t-[4px] border-b-[1px] border-black">
      <thead>
        <tr className="h-[74px]">
          <CheckBox
            checked={isAllChecked}
            onChange={() =>
              setSelectedItems(isAllChecked ? [] : allCheckedItems)
            }
          />
          {['상품 정보', '수량', '주문 금액', '배송비'].map((title, idx) => (
            <th
              className={cn(
                'table-cell border-b leading-[74px] text-[18px] text-center font-bold',
                idx === 0 && 'w-[50%]',
                idx === 1 && 'w-[15%]',
                idx === 2 && 'w-[15%]',
                idx === 3 && 'w-[16%]',
              )}
              key={title}
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.items.map((item, idx) => (
          <tr key={item.cartItemId}>
            <CheckBox
              checked={selectedItems.includes(item.cartItemId)}
              onChange={() => onChangeCheckItem(item.cartItemId)}
            />
            <td className="relative align-middle py-[30px] pr-[60px] border-b border-r">
              <div className="flex gap-[25px]">
                <Link
                  href={`/product/${item.productInfo.itemId}`}
                  className="text-[16px] font-semibold cursor-pointer"
                >
                  <Image
                    src={item.productInfo.itemImage}
                    alt={item.productInfo.itemName}
                    width={100}
                    height={100}
                  />
                </Link>
                <div className="flex flex-col gap-y-1">
                  <Link
                    href={`/brand/${item.brandInfo.brandId}`}
                    className="text-[12px] block underline cursor-pointer"
                  >
                    {item.brandInfo.brandName}
                  </Link>
                  <Link
                    href={`/product/${item.productInfo.itemId}`}
                    className="text-[16px] font-semibold cursor-pointer"
                  >
                    {item.productInfo.itemName}
                  </Link>
                  <p className="text-[13px]">
                    {formatWithCommas(item.productInfo.saleInfo.consumerPrice)}
                    원
                  </p>
                  <p className="text-[13px] text-[#ff4800]">
                    [{item.productInfo.saleInfo.totalSalePercent}%]{' '}
                    {formatWithCommas(item.productInfo.saleInfo.totalSalePrice)}
                    원
                  </p>
                  <p className="text-[12px]">
                    옵션 : {getOptionName(item.productInfo.selectedOptions)}
                  </p>
                </div>
              </div>
              <DeleteButton cartItemId={item.cartItemId} />
            </td>
            <td className="align-middle py-[30px] border-b border-r text-center">
              <div className="w-[108px] m-auto">
                <OptionStepper
                  number={item.productInfo.count}
                  onChangeCount={(count: number) =>
                    updateItemCount(item.cartItemId, count)
                  }
                />
              </div>
            </td>
            <td className="align-middle py-[30px] border-b border-r text-center">
              <p className="text-[22px] font-bold">
                {formatWithCommas(item.productInfo.saleInfo.totalSalePrice)}
                <span className="text-[18px] font-semibold">원</span>
              </p>
              <button className="w-[86px] h-[44px] mt-[16px] bg-black text-white text-[14px] rounded font-bold">
                구매하기
              </button>
            </td>
            {item.productInfo.deliveryFee === 0 &&
            idx === CartData.items.length - CartData.deliveryFeeFreeCount ? (
              <td
                className="align-middle py-[30px] border-b text-center"
                rowSpan={CartData.deliveryFeeFreeCount}
              >
                <p className="text-[15px] font-semibold">무료 업체배송</p>
              </td>
            ) : (
              <td
                className="align-middle py-[30px] border-b text-center"
                rowSpan={CartData.deliveryFeeFreeCount}
              >
                <p className="text-[15px] font-semibold">
                  {formatWithCommas(item.productInfo.deliveryFee)}원
                </p>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TotalPriceTable = ({ data, itemCount }: TotalPriceTableProps) => {
  const PriceTableHeader = ['총 주문금액', '총 배송비', '총 결제금액'];

  const calculateOrderSummary = useCallback(() => {
    let totalOrderAmount = 0,
      totalDeliveryFee = 0;

    data.items.forEach((item) => {
      totalOrderAmount +=
        item.productInfo.saleInfo.totalSalePrice * item.productInfo.count;
      totalDeliveryFee += item.productInfo.deliveryFee;
    });

    return {
      totalOrderAmount,
      totalDeliveryFee,
      totalPayment: totalOrderAmount + totalDeliveryFee,
    };
  }, [data.items]);

  const priceData = calculateOrderSummary();

  return (
    <div className="relative my-[120px]">
      <table className="w-full border-t-[4px] border-b-[1px] border-black">
        <thead>
          <tr>
            {PriceTableHeader.map((title) => (
              <th
                key={title}
                className="w-1/3 table-cell border-b leading-[74px] text-[18px] text-center font-bold"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="h-[149px] text-center text-[32px] font-semibold">
            <td className="table-cell relative">
              <p>
                {formatWithCommas(priceData.totalOrderAmount)}
                <span className="text-[17px]">원</span>
              </p>
              <p className="absolute left-1/2 bottom-[30px] -translate-x-1/2 block text-[14px]">
                총 {itemCount}개
              </p>
              <div className="absolute top-1/2 -translate-y-1/2 -right-[15px] size-[30px] bg-black rounded-full">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block w-1/2 h-[3px] bg-white" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block w-1/2 h-[3px] bg-white rotate-90" />
              </div>
            </td>
            <td className="table-cell relative">
              <p>
                {formatWithCommas(priceData.totalDeliveryFee)}
                <span className="text-[17px]">원</span>
              </p>
              <div className="absolute top-1/2 -translate-y-1/2 -right-[15px] size-[30px] bg-black rounded-full">
                <span className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block w-1/2 h-[3px] bg-white" />
                <span className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block w-1/2 h-[3px] bg-white" />
              </div>
            </td>
            <td className="table-cell">
              <p>
                {formatWithCommas(priceData.totalPayment)}
                <span className="text-[17px]">원</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  return (
    <td className="table-cell align-middle border-b">
      <label className="cursor-pointer">
        <input
          type="checkbox"
          className="hidden peer"
          onChange={onChange}
          checked={checked}
        />
        <div className="flex items-center justify-center w-[24px] h-[24px] border-[1px] border-[#dcdfe6] peer-checked:bg-black">
          <Icons.Check style="size-[20px]" />
        </div>
      </label>
    </td>
  );
};

const DeleteButton = ({ cartItemId }: { cartItemId: number }) => {
  const queryClient = useQueryClient();

  const deleteItemMutation = useMutation({
    mutationFn: (cartItemId: number) => deleteCartItems([cartItemId]),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  return (
    <div
      className="absolute top-6 right-6 border w-[24px] h-[24px] cursor-pointer hover:bg-slate-100"
      onClick={() => deleteItemMutation.mutate(cartItemId)}
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-3/4 h-[1px] bg-[#A0A0A0]" />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-3/4 h-[1px] bg-[#A0A0A0]" />
    </div>
  );
};

export default Cart;
