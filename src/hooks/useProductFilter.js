import { useMemo } from "react";

export const useProductFilter = (products, query) => {
  const searchedProducts = useMemo(() => {
    return products.filter(product => {
      const regex = new RegExp(query, 'i');

      return product.title.match(regex);
    })
  }, [products, query]);
  return searchedProducts;
};