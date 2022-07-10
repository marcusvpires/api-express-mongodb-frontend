import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Defaut = ({ array }) => {
  return (
    <S.Wrapper>
      <S.Element>Defaut</S.Element>
    </S.Wrapper>
  )
}

Defaut.propTypes = {
  array: PropTypes.node.isRequired,
}

export default Defaut