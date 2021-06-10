import React from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

import { ArrowRightSVG, HomeSVG, SearchSVG, ShareSVG } from "@assets";
import IconButton from "@components/IconButton";
import stores from "@data/stores";
import { products } from "@data/products";
import { Wrapper, Container, LeftSide, Center, RightSide } from "./Commons";

const StyledWrapper = styled(Wrapper)`
  ::after {
    width: 100%;
    height: 100%;
    content: "";
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 75%;
  }
`;

const ProductHeader = () => {
  const history = useHistory();
  const { location } = history;
  const { pathname } = location;

  const targetProducts = products.filter((p) => p.path === pathname);
  const [targetProduct] = targetProducts;
  const { storeId } = targetProduct;

  const targetStores = stores.filter((store) => store.id === storeId);
  const [targetStore] = targetStores;
  const { name } = targetStore;

  return (
    <StyledWrapper>
      <Container>
        <LeftSide>
          <IconButton onClick={() => history.goBack()}>
            <ArrowRightSVG width="20px" height="20px" />
          </IconButton>
          <IconButton onClick={() => history.push("/")}>
            <HomeSVG width="20px" height="20px" />
          </IconButton>
        </LeftSide>
        <Center>{name}</Center>
        <RightSide>
          <SearchSVG width="20px" height="20px" />
          <ShareSVG width="20px" height="20px" />
        </RightSide>
      </Container>
    </StyledWrapper>
  );
};

export default ProductHeader;
