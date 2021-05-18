import React from "react";
import { Helmet } from "react-helmet-async";

const Page = ({ title, children }: any) => {
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
