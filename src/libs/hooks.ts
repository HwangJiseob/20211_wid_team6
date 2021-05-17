import React from "react";

export const preventTransition = (dispatch: any) => {
  React.useEffect(() => {
    setTimeout(() => {
      dispatch("transition-duration: 0.5s;");
    }, 0);
  }, [dispatch]);
};

const hooks = {
  preventTransition,
};

export default hooks;
