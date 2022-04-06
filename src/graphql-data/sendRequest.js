import getData from "./get-data";
import { categoryData, CategoriesNames } from './dataQuery';

/* get a single category data with right argument */
export function getCategoryApiMethod(input) {
  let result = categoryData(input);
  return getData(result)
}

export function getAllCategoriesNames() {

  return getData(CategoriesNames)
}