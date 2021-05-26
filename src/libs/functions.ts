export const findPreferColor = () => {
  return window.matchMedia("(prefers-color-scheme: light)").matches;
};

export const switchScrollAvailable = () => {
  const { body } = document;
  if (body.style.overflow === "hidden") {
    body.style.overflow = "";
  } else {
    body.style.overflow = "hidden";
  }
};

const functions = {
  findPreferColor,
  switchScrollAvailable,
};

export default functions;
