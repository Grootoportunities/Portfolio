import React, { useEffect, useState } from "react";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { Icon } from "../../components/icon/Icon";
import { Container } from "../../components/Container";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { S } from "./Header_Styles";

const items: Array<{ title: string; hrefItem: string }> = [
  { title: "Home", hrefItem: "home" },
  { title: "Projects", hrefItem: "projects" },
  { title: "About", hrefItem: "about" },
  { title: "Skills", hrefItem: "skills" },
  { title: "Contacts", hrefItem: "contacts" },
];

export const Header: React.FC = () => {
  const [headerOnTop, setheaderOnTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setheaderOnTop(false);
      else setheaderOnTop(true);
    });
  }, []);

  return (
    <S.Header isOnTop={headerOnTop}>
      <Container>
        <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
          <Logo />
          <FlexWrapper
            justifyContent={"space-between"}
            gap={"64px"}
            alignItems={"center"}
          >
            <HeaderMenu menuItems={items} />
            <MobileMenu menuItems={items} />
            <S.ModeBtn>
              <Icon
                iconId={"Moon"}
                width={"37px"}
                height={"37px"}
                viewBox={"0 0 24 24"}
              />
            </S.ModeBtn>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
