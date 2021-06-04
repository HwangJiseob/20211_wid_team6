import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { css, useTheme } from "@emotion/react";

import { layout, defaultBreakpoint } from "@libs/config";
import { items } from "@data/pages";

const { header } = layout;

interface NavigatorProps {
  children: any;
  theme: string;
  page: string;
}

const NavigatorList = styled("ul")<NavigatorProps>`
  all: unset;
  list-style: none;
  display: flex;
  width: 100%;
  max-width: 720px;
  justify-content: space-around;
  ${defaultBreakpoint} {
    position: fixed;
    height: ${header.mobile_height};
    display: ${(props: NavigatorProps) =>
      ["stores", "map", "products"].includes(props.page) ? "none" : "grid"};
    box-shadow: 0px 20px 80px -20px ${(props: NavigatorProps) => (props.theme === "light" ? "gray" : "gray")};
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    bottom: 0;
    left: 0;
    transition-duration: 0.5s;
    background: ${(props: NavigatorProps) =>
      props.theme === "light" ? "#fff" : "#181818"};
  }
`;

const navItem = css`
  display: block;
  font-weight: bold;
  text-align: center;
`;

const navLink = css`
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 18px;
  ${defaultBreakpoint} {
    font-size: 11px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

const iconCSS = css`
  display: none;
  ${defaultBreakpoint} {
    display: initial;
  }
`;

const Navigator = () => {
  const { theme }: any = useTheme();
  const location = useLocation();
  const { pathname } = location;
  const page = pathname.split("/")[1];

  const li = css`
    .active {
      color: ${theme === "light" ? "#black" : "white"};
      ${defaultBreakpoint} {
        svg > path {
          fill: ${theme === "light" ? "black" : "white"};
        }
      }
    }
    color: #515c6f;
  `;

  return (
    <NavigatorList theme={theme} page={page}>
      {items.map((item: PageInfo) => {
        const Icon = item.icon;
        return (
          <li key={item.path} css={li}>
            <NavLink
              to={item.path}
              css={navLink}
              exact
              activeClassName="active"
            >
              <div css={navItem}>
                <Icon width={20} height={20} css={iconCSS} />
                <div>{item.name}</div>
              </div>
            </NavLink>
          </li>
        );
      })}
    </NavigatorList>
  );
};

export default Navigator;
