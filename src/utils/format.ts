import numeral from 'numeral';

export const formatWithCommas = (price: number) => {
  return numeral(price).format('0,0');
};

export const formatLikesToK = (count: number) => {
  return count > 1000 ? Math.floor(count / 1000) + 'K' : count;
};
