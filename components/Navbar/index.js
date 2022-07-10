import React from 'react';
import Link from 'next/link';
import * as S from './styled';
// import PropTypes from "prop-types"

import { navlinks, navButtons } from '../../assets/navegation';

import { Layer } from '@styled-icons/boxicons-regular';

const Navbar = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <S.LogoImage>
          <Layer />
        </S.LogoImage>
        <S.LogoText>Autenticação</S.LogoText>
      </S.Logo>
      <S.Links>
        {navlinks.map(({ label, href }) => (
          <S.LinkBox key={href}>
            <Link href={href} passHref>
              <S.Link>{label}</S.Link>
            </Link>
          </S.LinkBox>
        ))}
        <S.Link></S.Link>
      </S.Links>

      <S.Buttons>
        {navButtons.map(({ label, Icon, action, Component, custom }, index) => (
          <S.ButtonBox key={index}>
            {custom ? <Component /> : (
              <S.Button title={label} onClick={action}><Icon /></S.Button>
            )}
          </S.ButtonBox>
        ))}
      </S.Buttons>
      
    </S.Wrapper>
  );
};

export default Navbar;
