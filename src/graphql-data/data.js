const clothesCategoryData = {
  query:
    `{
    category(input: { title: "clothes" }) {
      name,
        products{
        id,
          name,
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
              value,
              displayValue
          }
        },
      prices{
        currency{
            label,
              symbol
          },
          amount
        },
        brand
      }
    }
  }`
}

export default clothesCategoryData