import React from "react";
import { NavLink } from "../../../../components/Link";
import { S } from "../HeaderMenu_Styles";

type HeaderMenuPropsType = {
  menuItems: Array<{
    title: string;
    hrefItem: string;
  }>;
  offset: number;
};

export const Menu: React.FC<HeaderMenuPropsType> = (
  props: HeaderMenuPropsType,
) => {
  return (
    <ul>
      {props.menuItems.map((item, index) => {
        return (
          <S.MenuItem key={index}>
            <NavLink
              activeClass={"active"}
              smooth
              to={item.hrefItem}
              spy
              offset={props.offset}
            >
              {item.title}
            </NavLink>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};
