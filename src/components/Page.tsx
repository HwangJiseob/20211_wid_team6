import React from "react";
import { Helmet } from "react-helmet-async";

const Page = ({ title, children }: any) => {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
};

export default Page;
