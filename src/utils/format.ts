export const formatToCurrency = (price: number) => {
  return price.toLocaleString();
};

export const formatLikesToK = (count: number) => {
  return count > 1000 ? Math.floor(count / 1000) + 'K' : count;
};
