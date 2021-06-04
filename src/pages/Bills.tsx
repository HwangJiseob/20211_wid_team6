import React from "react";

import { AppContext } from "@libs/hooks";

const Bills = () => {
  const { bills }: any = React.useContext(AppContext);
  console.log(bills);
  return <div>bill</div>;
};

export default Bills;
