import React from "react"
import PropTypes from "prop-types"
import Navbar from "../Navbar"

import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      <Navbar />
      <S.Main>{children}</S.Main>
    </S.Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout