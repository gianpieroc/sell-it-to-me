const allShopifyCollectionsHandle = `
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            handle
          }
        }
      }
    }
  `

module.exports = allShopifyCollectionsHandle
