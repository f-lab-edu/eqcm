import numeral from 'numeral';

export const formatWonPrice = (price: number) => {
  return numeral(price).format('0,0');
};

export const formatLikesToK = (count: number) => {
  return count > 1000 ? Math.floor(count / 1000) + 'K' : count;
};

export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
};
