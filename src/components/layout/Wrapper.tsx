import { css } from "@emotion/react";

const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

interface ReactProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: ReactProps) => {
  return <div css={wrapper}>{children}</div>;
};

export default Wrapper;
