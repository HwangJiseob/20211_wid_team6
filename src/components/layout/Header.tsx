import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { layout, defaultBreakpoint } from "@libs/config";
import { home } from "@data/pages";
import Navigator from "./Navigator";
import MobileHeader from "./MobileHeader";

const { main, header } = layout;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <MobileHeader />
        <Logo>
          <NavLink to={home.path}>💐꽃과 케이크🎂</NavLink>
        </Logo>
        <Navigator />
      </Container>
    </Wrapper>
  );
};

const Logo = styled.div`
  margin: 10px 0 10px 0;
  font-size: 36px;
  font-weight: bold;
  a {
    color: inherit;
    text-decoration: none;
  }
  :hover {
    cursor: pointer;
  }
  ${defaultBreakpoint} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${header.pc_height};
  z-index: 10;
  ${defaultBreakpoint} {
    height: ${header.mobile_height};
  }
`;
const Container = styled.div`
  display: block;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: ${main.max_width};
  box-sizing: border-box;
  padding: 5px 10px;
`;

export default Header;
