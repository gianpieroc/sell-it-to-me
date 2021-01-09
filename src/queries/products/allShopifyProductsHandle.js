const allShopifyProductsHandle = `
    query {
      allShopifyCollection {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  `

module.exports = allShopifyProductsHandle
