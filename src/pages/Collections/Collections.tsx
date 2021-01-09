import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Collections = () => {
  const query = useStaticQuery(graphql`
    query CollectionsQuery($id: String!) {
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
  `)

  console.log(query)

  return <div>{query}</div>
}

export default Collections
