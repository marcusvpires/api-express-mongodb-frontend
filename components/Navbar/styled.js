import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100vw;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-1);
  border-bottom: 1px solid var(--border);
`;

export const Logo = styled.div`
  display: flex;
`;
export const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  padding-left: 1rem;
  color: var(--txt-2);
`;
export const LogoImage = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  color: var(--primary);
`;

export const Links = styled.ul`
  display: flex;
`;
export const LinkBox = styled.li`
  padding: .5rem 1rem;
  text-decoration: none;
  cursor: pointer;
`;
export const Link = styled.a`
  text-decoration: none;
  color: var(--txt-1);
`;

export const Buttons = styled.ul`
  display: flex;
`
export const ButtonBox = styled.li`
  padding: .4rem 1rem;
  text-decoration: none;
  cursor: pointer;
  `;
export const Button = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  color: var(--txt-2);
  cursor: pointer;
`;