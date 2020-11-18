import { Link } from "gatsby"
import styled from "styled-components"

export const HeaderContainer = styled.header`
  ${({ theme }) => `
    background: ${theme?.colors?.primaryColor}
    margin-bottom: 1.45rem,
`}
`

export const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

export const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`
