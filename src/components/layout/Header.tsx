import styled from "@emotion/styled";

import { Navigator } from ".";
import { layout } from "../../libs/config";

const { main, header } = layout;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <div>header</div>
        <Navigator />
      </Container>
    </Wrapper>
  );
};

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
  display: "block"; /* 임시 */
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: ${main.max_width};
  box-sizing: border-box;
  padding: 5px 10px;
`;
export default Header;
