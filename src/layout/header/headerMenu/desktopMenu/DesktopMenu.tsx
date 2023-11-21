import React from "react";
import { S } from "../HeaderMenu_Styles";
import { Menu } from "../menu/Menu";

type HeaderMenuPropsType = {
  menuItems: Array<{
    title: string;
    hrefItem: string;
  }>;
  offset: number;
};

export const DesktopMenu: React.FC<HeaderMenuPropsType> = (
  props: HeaderMenuPropsType,
) => {
  return (
    <S.DesktopMenu>
      <Menu menuItems={props.menuItems} offset={props.offset} />
    </S.DesktopMenu>
  );
};
