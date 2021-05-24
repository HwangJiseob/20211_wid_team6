import styled from "@emotion/styled";

import { layout } from "@libs/config";
import Navigator from "./Navigator";
import MobileHeader from "./MobileHeader";

const { main, header, mobileBreakpoint } = layout;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <MobileHeader />
        <Logo>💐꽃과 케이크🎂</Logo>
        <Navigator />
      </Container>
    </Wrapper>
  );
};

const Logo = styled.div`
  ${mobileBreakpoint()} {
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
`;
const Container = styled.div`
  /* display: flex; */
  display: block;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: ${main.max_width};
  box-sizing: border-box;
  padding: 5px 10px;
`;

export default Header;
