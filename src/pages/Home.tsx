import React from "react";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <>
      <Section1>
        <BannerButton>꽃</BannerButton>
        <BannerButton>케이크</BannerButton>
      </Section1>
      <Section2>
        <Item>아이템 1</Item>
        <Item>아이템 2</Item>
        <Item>아이템 3</Item>
        <Item>아이템 4</Item>
        <Item>아이템 5</Item>
      </Section2>
    </>
  );
};

const Section1 = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  margin: 0 0 20px 0;
`;

const BannerButton = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 200px;
  border-radius: 5px;
  border: 1px solid blue;
`;

const Section2 = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  gap: 10px;
`;

const Item = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid blue;
  height: 50px;
  display: grid;
  place-items: center;
`;

export default Home;
