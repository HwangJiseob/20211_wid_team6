import React from "react";
import { Link } from "react-router-dom";
import { css, useTheme } from "@emotion/react";

interface Item {
  name: string;
  path: string;
}

const items: Array<Item> = [
  { name: "Home", path: "/" },
  { name: "Login", path: "/login" },
];

const navigator = css`
  all: unset;
  list-style: none;
  display: flex;
  max-width: 600px;
  width: 100%;
`;

const Navigator = () => {
  const { theme, setTheme }: any = useTheme();
  const changeTheme = React.useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  }, [theme, setTheme]);
  return (
    <ul css={navigator}>
      {items.map((item: Item) => {
        return (
          <li
            key={item.path}
            css={css`
              padding: 0 10px 0 0;
            `}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        );
      })}
      <li>
        <button type="button" onClick={changeTheme}>
          dd
        </button>
      </li>
    </ul>
  );
};

export default Navigator;
