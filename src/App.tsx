import React from "react";

import GlobalWrapper from "./components/GlobalWrapper";
import Routes from "./components/Routes";

const App = () => {
  // const [theme, setTheme] = React.useState();
  return (
    <GlobalWrapper>
      <Routes />
    </GlobalWrapper>
  );
};

export default App;
