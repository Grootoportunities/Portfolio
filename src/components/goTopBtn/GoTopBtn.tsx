import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll } from "react-scroll";
import { Theme } from "../../styles/Theme";

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
        <StyledGoTopBtn
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
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button`
  padding: 20px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  background-color: ${Theme.colors.secondary};
  z-index: 99999999999999;
  box-shadow: 1px 1px 10px 10px rgba(33, 87, 242, 0.2);
  border-radius: 50%;
  color: ${Theme.colors.accent};
`;
