import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { css, useTheme } from "@emotion/react";

import { layout } from "@libs/config";
import { items } from "@data/pages";

const { mobileBreakpoint, header } = layout;

interface NavigatorProps {
  children: any;
  theme: string;
  page: string;
}

const NavigatorList = styled("ul")<NavigatorProps>`
  all: unset;
  list-style: none;
  display: flex;
  max-width: 600px;
  width: 100%;
  ${mobileBreakpoint()} {
    position: fixed;
    height: ${header.mobile_height};
    display: ${(props: NavigatorProps) =>
      props.page === "stores" ? "none" : "grid"};
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
  color: #515c6f;
  font-weight: bold;
  text-align: center;
`;

const navLink = css`
  color: inherit;
  text-decoration: none;
  font-size: 11px;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const Navigator = () => {
  const { theme }: any = useTheme();
  const location = useLocation();
  const { pathname } = location;
  const page = pathname.split("/")[1];
  return (
    <NavigatorList theme={theme} page={page}>
      {items.map((item: PageInfo) => {
        const Icon = item.icon;
        return (
          <li key={item.path}>
            <Link to={item.path} css={navLink}>
              <div css={navItem}>
                <Icon width={20} height={20} />
                <div>{item.name}</div>
              </div>
            </Link>
          </li>
        );
      })}
    </NavigatorList>
  );
};

export default Navigator;
