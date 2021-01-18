import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query CollectionsQuery($id: String) {
    allShopifyCollection(filter: { handle: { eq: $id } }) {
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

const Collections = ({ pageContext, data }) => {
  console.log(data.allShopifyCollection.nodes[0], pageContext)

  return <div>{query}</div>
}

export default Collections
