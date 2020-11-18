import PropTypes from "prop-types"
import React from "react"
import { HeaderContainer, HeaderContent, HeaderLink } from "./Header.styled"

const Header = ({ siteTitle, children }) => (
  <HeaderContainer>
    <HeaderContent>
      <HeaderLink>{siteTitle}</HeaderLink>
    </HeaderContent>
    {children}
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
