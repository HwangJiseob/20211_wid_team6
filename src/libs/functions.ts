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

export const formatNumber = (target: number) => {
  if (target === 0) {
    return 0;
  }

  const num = `${target}`;

  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ",");

  // ref: https://doolyit.tistory.com/127
};

const functions = {
  findPreferColor,
  switchScrollAvailable,
  formatNumber,
};

export default functions;
