/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"
import { useStaticQuery, graphql, Link } from "gatsby"

import { themeModeSelectedSelector } from "../../state/config/selectors"
import Header from "../Header"
import "./layout.css"

const graphqlQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allShopifyProduct {
      nodes {
        productType
      }
    }
  }
`

const Layout = ({ children }) => {
  const theme = useSelector(state => themeModeSelectedSelector(state, "light"))
  const data = useStaticQuery(graphqlQuery)
  console.log(data)
  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`}>
        {data.allShopifyProduct.nodes.map(({ productType }) => (
          <Link to={`/product/${productType}`}>{productType}</Link>
        ))}
      </Header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          Hi
        </footer>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
