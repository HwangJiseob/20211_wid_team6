import { BrowserRouter } from "react-router-dom";

import Routes from "./components/Routes";
import LayoutWrapper from "./components/layout/Wrapper";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Global from "./components/layout/Global";

const App = () => {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        {/* Header */}
        <Global />
        <Header />
        <Main>
          <Routes />
        </Main>
        <Footer />
      </LayoutWrapper>
    </BrowserRouter>
  );
};

export default App;
