import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

import { defaultBreakpoint } from "@libs/config";

const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <Section1>
        <BannerButton onClick={() => history.push("/florists")}>
          꽃
        </BannerButton>
        <BannerButton>케이크</BannerButton>
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

const BannerButton = styled.button`
  all: unset;
  display: grid;
  place-items: center;
  width: 100%;
  box-sizing: border-box;
  border-radius: 40px;
  background: #bbd7e5;
  color: white;
  font-size: 50px;
  font-weight: bolder;
`;

export default Home;
