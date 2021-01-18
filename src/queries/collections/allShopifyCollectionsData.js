const allShopifyCollectionsData = `
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
