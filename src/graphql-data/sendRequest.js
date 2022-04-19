import getData from "./get-data";
import { categoryData, CategoriesNames, PricesData, ProductData, AttrData } from './dataQuery';

/* get a single category data with right argument */
export function getCategoryApiMethod(input) {
  let result = categoryData(input);
  return getData(result)
}

export function getAllCategoriesNames() {
  return getData(CategoriesNames)
}

export function getPriceData() {
  return getData(PricesData)
}

export function getProductData(id) {
  let result = ProductData(id);
  return getData(result)
}

export function getAttrData(id) {
  let result = AttrData(id);
  return getData(result)
}
