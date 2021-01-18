const allShopifyCollectionsWithProducts = `
    query {
      allShopifyCollection {
        nodes {
          id
          description
          handle
          title
          shopifyId
          products {
            title
            id
            handle
            description
            availableForSale
            createdAt
            descriptionHtml
            images {
              id
              originalSrc
            }
          }
          descriptionHtml
        }
      }
    }
  `

module.exports = allShopifyCollectionsWithProducts
