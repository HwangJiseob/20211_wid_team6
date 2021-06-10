import React from "react";
import styled from "@emotion/styled";
import { keyframes, useTheme } from "@emotion/react";
import { useHistory } from "react-router-dom";

import { defaultBreakpoint } from "@libs/config";

const { PUBLIC_URL } = process.env;

const removeAnimation = keyframes`
  from {
  }
  to {
    opacity: 0;
  }
`;

interface StyledProps {
  children?: any;
  theme: string;
}

const Curtain = styled.div<StyledProps>`
  animation: ${removeAnimation};
  animation-duration: 0.5s;
  animation-delay: 0.2s;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background: ${(props: StyledProps) =>
    props.theme === "light" ? "white" : "#181818"};
  z-index: 400;
`;

const Home = () => {
  const [initial, setInitial] = React.useState(true);
  const { theme }: any = useTheme();

  React.useEffect(() => {
    if (initial) {
      setTimeout(() => {
        setInitial(false);
      }, 400);
    }
  }, []);

  const history = useHistory();
  return (
    <Container>
      {initial && <Curtain theme={theme} />}
      <Section1>
        <BannerButton
          onClick={() => history.push("/florists")}
          style={{
            background: `no-repeat center url(${PUBLIC_URL}/images/1_flower.jpg)`,
            backgroundSize: "cover",
          }}
        >
          꽃
        </BannerButton>
        <BannerButton
          style={{
            background: `no-repeat center url(${PUBLIC_URL}/images/1_cake.jpg)`,
            backgroundSize: "cover",
          }}
        >
          케이크
        </BannerButton>
      </Section1>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: calc(100vh - 275px);
  /*
    + 100px for header.pc_height
    + 150px for footer.pc_height
    +  25px for margins and paddings
    ---------------------------------------
    = 275px
  */
  ${defaultBreakpoint} {
    height: calc(100vh - 150px);
    /*
      + 60px for header.mobile_height
      + 60px for naviator in mobile version
      + 30px for margins and paddings
      ---------------------------------------
      = 150px
     */
  }
`;

const Section1 = styled.section`
  width: 100%;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 50px;
  ${defaultBreakpoint} {
    grid-template-columns: 1fr;
    width: 100%;
    height: 90%;
    display: grid;
    gap: 50px;
  }
`;

const BannerButton = styled.div`
  all: unset;
  display: grid;
  place-items: center;
  width: inherit;
  box-sizing: border-box;
  color: white;
  font-size: 50px;
  border-radius: 40px;
  font-weight: bolder;
  overflow: hidden;

  div {
    position: absolute;
    /* left: 50%;
    transform: translate(-50%, 50%); */
  }
`;

export default Home;
