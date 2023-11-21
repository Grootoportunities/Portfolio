import React, { useEffect, useState } from "react";
import { Icon } from "../icon/Icon";
import { animateScroll } from "react-scroll";
import { S } from "./GoTopBtn_Styles";
export const GoTopBtn = () => {
  const [showBtn, setshowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) setshowBtn(true);
      else setshowBtn(false);
    });
  }, []);

  return (
    <>
      {showBtn && (
        <S.GoTopBtn
          onClick={() => {
            animateScroll.scrollToTop();
          }}
        >
          <Icon
            iconId={"GoTopArrow"}
            width={"25"}
            height={"25"}
            viewBox={"0 0 25 25"}
          />
        </S.GoTopBtn>
      )}
    </>
  );
};
