export function categoryData(value) {
  return {
    query: `query($input: CategoryInput){
    category(input:$input){      
      name,
      products{
        id,
        name,
        inStock,
        category,
        gallery,
        attributes{
          id,
          name,
          type,
          items{
            displayValue,
            value,
            id
          }
        },
        prices{
          currency{
            label,
            symbol
          }
        amount 
        }      
      }
    }
}`,
    variables: {
      "input": { "title": value }
    }
  }
}


export function ProductData(id) {
  return {
    query: `query ($id: String!) {
      product(id: $id, ) {
        id,
        name,
        brand,
        inStock,
        gallery,
        description,
        category,
        attributes{
          id,
          name,
          type,
          items{
            id, 
            displayValue,
            value
          }
        }
        prices{
          currency{
            label,
            symbol
          }
        amount 
        }    
      }    
    }`,
    variables: {
      "id": id
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

export const PricesData =
{
  query: `{
    currencies{
      label,
      symbol
    }
  }`
}

export function AttrData(id) {
  return {
    query: `query ($id: String!) {
      product(id: $id, ) {
        name,
        id,       
       attributes{
          id,
          name,
          type,
          items{
            id, 
            displayValue,
            value
          }
        }
        
      }    
    }`,
    variables: {
      "id": id
    }
  }
}






