import React from "react";
import { useHistory } from "react-router-dom";

import { ArrowRightSVG, HomeSVG, SearchSVG, ShareSVG } from "@assets";
import IconButton from "@components/IconButton";
import stores from "@data/stores";
import { products } from "@data/products";
import { Wrapper, Container, LeftSide, Center, RightSide } from "./Commons";

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
    <Wrapper>
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
    </Wrapper>
  );
};

export default ProductHeader;
