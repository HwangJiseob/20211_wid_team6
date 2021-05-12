import layout from "./layout";
import GlobalWrapper from "./GlobalWrapper";
import Routes from "./Routes";

const { Wrapper, Header, Main, Footer, Global } = layout;

export { GlobalWrapper, Routes, Wrapper, Header, Main, Footer, Global };

const components = {
  GlobalWrapper,
  Routes,
  ...layout,
};

export default components;
