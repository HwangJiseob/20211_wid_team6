import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./components/Routes";
// import Home from "./pages/Home";
// import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
