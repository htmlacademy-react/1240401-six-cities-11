import { Offer } from './types/offers';


export const sortingRules = {
  lowToHigh: (a: Offer, b: Offer) => a.price - b.price,
  highToLow: (a: Offer, b: Offer) => b.price - a.price,
  topRated: (a: Offer, b: Offer) => b.rating - a.rating,
};

export const getSortedOffers = (offers: Offer[], activeSorting: string) => {
  const sortedOffers = offers.slice();
  const sortFn = sortingRules[activeSorting as keyof typeof sortingRules];
  if(!sortFn) {
    return sortedOffers;
  }
  return sortedOffers.sort(sortingRules[activeSorting as keyof typeof sortingRules]);
};
