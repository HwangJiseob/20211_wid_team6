import styled from "@emotion/styled";

import { layout } from "../../libs/config";

const { main } = layout;

interface ReactProps {
  children: React.ReactNode;
}

const Main = ({ children }: ReactProps) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Container = styled.main`
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px 20px 10px;
  max-width: ${main.max_width};
`;

export default Main;
