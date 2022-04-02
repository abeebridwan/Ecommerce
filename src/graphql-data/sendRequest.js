import getData from "./get-data";
import clothesCategoryData from './data'

/* get a single category data with right argument */
export function getCategoryApiMethod() {
  return getData(clothesCategoryData)
}
