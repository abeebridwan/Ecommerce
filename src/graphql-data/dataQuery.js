export function categoryData(value) {
  return {
    query: `query($input: CategoryInput){
  category(input:$input){
    name,
    products{
      name
    }
  }
}`,
    variables: {
      "input": { "title": value }
    }
  }
}

export const CategoriesNames = 
    {
    query: `{
        categories {      
            name      
        }
      }`
  }









