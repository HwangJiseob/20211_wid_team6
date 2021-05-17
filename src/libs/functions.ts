import React from "react";

export const findPreferColor = () => {
  return window.matchMedia("(prefers-color-scheme: light)").matches;
};

export const preventTransition = (dispatch: any) => {
  React.useEffect(() => {
    setTimeout(() => {
      dispatch("transition-duration: 0.5s;");
    }, 0);
  }, [dispatch]);
};

const functions = {
  findPreferColor,
  preventTransition,
};

export default functions;
