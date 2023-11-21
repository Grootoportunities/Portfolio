import styled, { css } from "styled-components";
import { Theme } from "../../../styles/Theme";
import me from "../../../assets/images/photo_2023-10-23_15-19-26cut.jpg";
import { font } from "../../../styles/Common";
import { NavLink } from "../../../components/Link";

//Biography

const Biography = styled.section`
  position: relative;

  &::before {
    content: "";
    height: 100%;
    width: 30%;
    background-color: ${Theme.colors.primary};
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;

    @media ${Theme.media.tablet} {
      width: 50%;
    }
  }
`;

const Information = styled.article`
  min-height: 968px;
  height: 100%;

  background-image: linear-gradient(
    147deg,
    ${Theme.colors.primary},
    ${Theme.colors.secondary}
  );

  border-radius: 200px 0;
  border: 2px solid #bfcbf6;
  backdrop-filter: blur(4px);
  padding: 75px 30px 65px 60px;

  @media ${Theme.media.tablet} {
    min-height: 100vh;
  }

  @media ${Theme.media.mobile} {
    border-radius: 110px 0;
    padding: 50px 30px 30px;
    min-height: 100vh;
  }
`;

const MeImg = styled.img.attrs(() => ({
  src: me,
  alt: "Me",
}))`
  max-width: 450px;
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
  box-shadow: 5px 6px 10px 10px rgba(0, 0, 0, 0.2);
`;

const Name = styled.h3`
  ${font({ color: Theme.colors.accent, weight: 700, Fmax: 60, Fmin: 34 })}

  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: currentColor;

    position: absolute;
    bottom: -10px;
  }
`;

const Stream = styled.h4`
  ${font({
    color: Theme.colors.font.pramiary.light,
    family: "Kalameh, sans-serif",
    weight: 700,
    Fmax: 30,
    Fmin: 20,
  })}

  text-align: center;
`;

const CommonInformation = styled.p`
  //${font({ Fmax: 20, Fmin: 18 })}

  max-width: 700px;
  width: 100%;
`;

const BiographyInfo = styled(CommonInformation)`
  span {
    font-weight: bold;
  }
`;

const SkillsInfo = styled(CommonInformation)`
  font-weight: bold;
`;

//TabMenu

const TabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 58px;

    @media ${Theme.media.tablet} {
      justify-content: flex-start;
      gap: 17px;
    }

    @media ${Theme.media.mobile} {
      gap: 24px;
    }
  }

  margin: 15px 0;
`;

const ListItem = styled.li<{ active: boolean }>`
  ${NavLink} {
    font-size: 18px;
  }

  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 25%;
    height: 2px;
    background-color: ${Theme.colors.accent};
    border-radius: 10px;

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: ${Theme.animations.transitions.regular};
  }

  &:hover {
    &::before {
      width: 50%;
    }
  }

  &:active {
    &::before {
      width: 100%;
    }

    transform: translateY(1px);
  }

  ${(props) =>
    props.active &&
    css<{ active: boolean }>`
      &::before {
        width: 100%;
      }

      &:hover {
        &::before {
          width: 100%;
        }
      }
    `}

  @media ${Theme.media.mobile} {
    margin: 10px 0;
  }
`;

export const S = {
  Biography,
  Information,
  MeImg,
  Name,
  Stream,
  CommonInformation,
  BiographyInfo,
  SkillsInfo,
  TabMenu,
  ListItem,
};
