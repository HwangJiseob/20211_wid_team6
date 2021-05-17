export const findPreferColor = () => {
  return window.matchMedia("(prefers-color-scheme: light)").matches;
};

const functions = {
  findPreferColor,
};

export default functions;
