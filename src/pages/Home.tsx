import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

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
  height: calc(100vh - 150px); // 일단 하드코딩
`;

const Section1 = styled.section`
  width: 100%;
  height: 90%;
  display: grid;
  gap: 50px;
`;

const BannerButton = styled.button`
  all: unset;
  display: grid;
  place-items: center;
  width: 100%;
  /* height: 200px; */
  border-radius: 40px;
  background: #bbd7e5;
  color: white;
  font-size: 50px;
  font-weight: bolder;
`;

export default Home;
