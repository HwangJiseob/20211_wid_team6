import React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

import { switchTheme } from "@libs/hooks";
import { layout } from "@libs/config";

const { mobileBreakpoint } = layout;

const MyPage = () => {
  const { theme, setTheme }: any = useTheme();
  const history = useHistory();

  const changeTheme = switchTheme({ theme, setTheme });

  return (
    <Wrapper>
      <Profile>
        <Image theme={theme} />
      </Profile>
      <Buttons theme={theme}>
        <Button onClick={() => history.push("/wishlist")}>장바구니</Button>
        <Button onClick={() => history.push("/anniversaries")}>
          기념일 조회
        </Button>
        <Button onClick={changeTheme}>change</Button>
      </Buttons>
    </Wrapper>
  );
};

interface Props {
  children?: any;
  theme: any;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Profile = styled.div`
  margin: 30px 0 40px 0;
  width: 100%;
  display: grid;
  place-items: center;

  ${mobileBreakpoint()} {
    margin: 0 0 30px 0;
  }
`;

const Image = styled.div<Props>`
  width: 30vh;
  max-width: 200px;
  height: 30vh;
  max-height: 200px;
  border-radius: 20vh;
  border: 1px solid
    ${(props: Props) => (props.theme === "light" ? "#181818" : "white")};
  transition: border ease 0.5s;
`;

const Buttons = styled.div<Props>`
  display: grid;
  gap: 20px;
  max-width: 480px;
  width: 100%;

  button {
    border: 1px solid
      ${(props: Props) => (props.theme === "light" ? "#181818" : "white")};
    transition: border ease 0.5s;
    :hover {
      background: ${(props: Props) =>
        props.theme === "light" ? "#181818" : "white"};
      color: ${(props: Props) =>
        props.theme === "light" ? "white" : "#181818"};
      transition: background-color ease 0.5s, color ease 0.5s;
    }
  }
`;

const Button = styled.button`
  all: unset;
  height: 50px;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 20px;
  cursor: pointer;
`;

export default MyPage;
