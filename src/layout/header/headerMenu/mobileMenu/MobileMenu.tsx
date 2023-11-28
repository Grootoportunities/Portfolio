import React, { useState } from "react";
import { S } from "../HeaderMenu_Styles";
import { Menu } from "../menu/Menu";

type MobileMenuPropsType = {
  menuItems: Array<{
    title: string;
    hrefItem: string;
  }>;
  offset: number;
};

export const MobileMenu: React.FC<MobileMenuPropsType> = (
  props: MobileMenuPropsType,
) => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setmenuIsOpen(!menuIsOpen);
  };
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopUp
        isOpen={menuIsOpen}
        onClick={() => {
          setmenuIsOpen(false);
        }}
      >
        <Menu menuItems={props.menuItems} offset={props.offset} />
      </S.MobileMenuPopUp>
    </S.MobileMenu>
  );
};
