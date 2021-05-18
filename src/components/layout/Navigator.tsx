import React from "react";
import { Link } from "react-router-dom";
import { css, useTheme } from "@emotion/react";

import { layout } from "@libs/config";
import { items } from "@data/pages";

const { mobileBreakpoint, header } = layout;

const navigator = css`
  all: unset;
  list-style: none;
  display: flex;
  max-width: 600px;
  width: 100%;
  ${mobileBreakpoint()} {
    position: fixed;
    height: ${header.mobile_height};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    /* justify-items: space-between; */
    bottom: 0;
    left: 0;
  }
`;

const navLink = css`
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const Navigator = () => {
  const { theme, setTheme }: any = useTheme();
  const changeTheme = React.useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  }, [theme, setTheme]);
  return (
    <ul css={navigator}>
      {items.map((item: PageInfo) => {
        return (
          <li key={item.path}>
            <Link to={item.path} css={navLink}>
              {item.name}
            </Link>
          </li>
        );
      })}
      <li>
        <button type="button" onClick={changeTheme}>
          change
        </button>
      </li>
    </ul>
  );
};

export default Navigator;
