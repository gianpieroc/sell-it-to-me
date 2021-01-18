const path = require(`path`)
const allShopifyProductsHandleQuery = require(`./src/queries/products/allShopifyProductsHandle`)
const allShopifyCollectionsHandleQuery = require(`./src/queries/collections/allShopifyCollectionsHandle`)
const allShopifyCollectionsWithProducts = require(`./src/queries/collections/allShopifyCollectionsWithProducts`)

const createProductPage = async ({ graphql, actions }) => {
  const { createPage } = actions
  const allShopifyProductsHandle = await graphql(
    allShopifyCollectionsHandleQuery
  )

  allShopifyProductsHandle.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/product/${node.handle}`,
      component: path.resolve(`./src/pages/product.tsx`),
      context: {
        product: node,
      },
    })
  })
}

const createCollectionsPage = async ({ graphql, actions }) => {
  const { createPage } = actions
  const allShopifyCollectionsHandle = await graphql(
    allShopifyCollectionsWithProducts
  )

  allShopifyCollectionsHandle.data.allShopifyCollection.nodes.forEach(node => {
    createPage({
      path: `/collection/${node.handle}`,
      component: path.resolve(`./src/pages/Collections/Collections.tsx`),
      context: {
        collection: node,
        id: node.handle,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createProductPage({ graphql, actions })
  await createCollectionsPage({ graphql, actions })
}
