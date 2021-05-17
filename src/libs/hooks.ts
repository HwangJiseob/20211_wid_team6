import React from "react";

export const preventTransition = (dispatch: React.Dispatch<string>) => {
  React.useEffect(() => {
    dispatch("transition-duration: 0.5s;");
  }, [dispatch]);
};

const hooks = {
  preventTransition,
};

export default hooks;
