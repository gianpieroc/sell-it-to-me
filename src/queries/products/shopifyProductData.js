const shopifyProductData = `
{
    product(id: "gid://shopify/Product/10521578626") {
      availablePublicationCount
      collections(first: 5) {
        edges {
          node {
            handle
          }
        }
      }
      createdAt
      defaultCursor
      description
      descriptionHtml
      featuredImage {
        id
      }
      feedback {
        details {
          messages {
            message
          }
        }
      }
      giftCardTemplateSuffix
      handle
      hasOnlyDefaultVariant
      hasOutOfStockVariants
      id
      images(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      inCollection(id: "gid://shopify/Collection/425038914")
      isGiftCard
      legacyResourceId
      metafield(key: "app_key", namespace: "affiliates") {
        description
      }
      metafields(first: 5) {
        edges {
          node {
            description
          }
        }
      }
      onlineStorePreviewUrl
      onlineStoreUrl
      options {
        name
      }
      priceRange {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      productType
      publicationCount
      publishedAt
      resourcePublications(first: 5) {
        edges {
          node {
            isPublished
          }
        }
      }
      seo {
        title
      }
      storefrontId
      tags
      templateSuffix
      title
      totalInventory
      totalVariants
      tracksInventory
      unpublishedPublications(first: 5) {
        edges {
          node {
            name
          }
        }
      }
      updatedAt
      variants(first: 5) {
        edges {
          node {
            displayName
          }
        }
      }
      vendor
    }
  }`

module.exports = shopifyProductData
