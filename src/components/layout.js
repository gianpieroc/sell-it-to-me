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
import {
  themeModeSelectedSelector,
  themeModeSelector,
} from "../state/config/selectors"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const graphqlQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }) => {
  const theme = useSelector(state => themeModeSelectedSelector(state, "light"))
  const data = useStaticQuery(graphqlQuery)
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
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
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
