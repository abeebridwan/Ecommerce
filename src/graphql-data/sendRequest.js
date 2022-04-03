import getData from "./get-data";
import categoryData from './dataQuery'

/* get a single category data with right argument */
export function getCategoryApiMethod(input) {
  let result = categoryData(input)
  return getData(result)
}
