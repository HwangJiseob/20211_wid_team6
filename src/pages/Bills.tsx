import React from "react";

import { AppContext } from "@libs/hooks";

const Bills = () => {
  const { bills }: any = React.useContext(AppContext);
  return <div>{bills ? "구매내역 있음" : "구매내역 없음."}</div>;
};

export default Bills;
