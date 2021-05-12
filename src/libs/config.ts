export const layout: any = {
  mobile_breakpoint: (width: string) =>
    `@media screen and (max-width: ${width || "768px"})`,
  header: {
    pc_height: "60px",
    mobile_height: "60px",
  },
  main: {
    max_width: "1200px",
  },
  footer: {
    pc_height: "150px",
    mobile_height: "30px",
  },
};

// const theme:any = {

// }

const config: any = {
  layout,
};

export default config;
