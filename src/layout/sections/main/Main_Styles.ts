import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import photo from "../../../assets/images/173543381_545605816406879_8761131686456400960_n-_1_.webp";

//Main

const About = styled.article`
  display: flex;
  align-items: center;
  gap: 76px;
  flex-wrap: wrap;
  position: relative;

  background-image: linear-gradient(
    147deg,
    ${Theme.colors.primaryBlur} -6.76%,
    ${Theme.colors.secondaryBlur} 102.96%
  );

  border-radius: 200px 0;
  border: 2px solid ${Theme.colors.secondary};
  backdrop-filter: blur(4px);

  width: 100%;
  padding: 43px 11px 41px 104px;

  @media ${Theme.media.iPadAir} {
    justify-content: center;
    padding: 40px 0;
  }

  @media ${Theme.media.tablet} {
    gap: 25px;
    padding: 30px 50px 90px;
    justify-content: center;
    border-radius: 200px 0 110px 0;
  }

  @media ${Theme.media.mobile} {
    border-radius: 110px 0;
    padding: 20px 30px 50px 40px;
  }
`;

const RegisterButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const Name = styled.h2`
  ${font({
    weight: 700,
    Fmax: 60,
    Fmin: 34,
    color: Theme.colors.font.pramiary.light,
  })}

  white-space: nowrap;

  span {
    color: ${Theme.colors.accent};
  }
`;

const MainTitle = styled.h1`
  ${font({
    color: Theme.colors.font.pramiary.light,
    weight: 700,
    Fmax: 60,
    Fmin: 30,
  })}

  white-space: nowrap;

  p {
    display: none;
  }

  @media ${Theme.media.tablet} {
    display: none;
  }
`;

const MediaMainTitle = styled(MainTitle)`
  display: none;

  @media ${Theme.media.tablet} {
    display: block;
  }
`;

const Description = styled.p`
  max-width: 376px;
  width: 100%;

  ${font({ Fmax: 20, Fmin: 14 })}

  @media ${Theme.media.tablet} {
    margin-bottom: 30px;
  }

  @media ${Theme.media.mobile} {
    margin-bottom: 0;
  }
`;

const Photo = styled.img.attrs(() => ({
  src: photo,
  alt: "Photo",
}))`
  max-width: 400px;
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  border: 25px solid ${Theme.colors.secondary};

  @media ${Theme.media.tablet} {
    width: 335px;
    height: 335px;
  }

  @media ${Theme.media.mobile} {
    width: 190px;
    height: 190px;
    border: 14px solid ${Theme.colors.secondary};
  }
`;

const Apps = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: -3;

  margin-top: 66px;

  &::before {
    content: "+";
    display: inline-block;
    color: ${Theme.colors.pseudo};
    background-color: transparent;
    position: absolute;
    z-index: -4; //todo: Почему не заходит за артикль?

    bottom: 465%;
    right: 50%;
    transform: rotate(-45deg);
    text-align: center;
    font-size: 150px;
    font-style: normal;
    font-weight: 600;
  }

  &:last-child {
    margin-right: 133px;

    @media ${Theme.media.iPadAir} {
      margin-right: 0;
    }
  }

  @media ${Theme.media.tablet} {
    display: none;
  }
`;

const Main = styled.section`
  display: flex;
  min-height: 100vh;

  position: relative;
  padding-top: 188px;

  &::after {
    content: "";
    width: 152px;
    height: 152px;
    position: absolute;
    z-index: -2; //todo: тоже
    border: 20px solid ${Theme.colors.pseudo};
    border-radius: 50%;
    right: 156px;
    bottom: 242px;

    @media ${Theme.media.tablet} {
      right: 50px;
      bottom: 150px;
    }

    @media ${Theme.media.mobile} {
      right: 20px;
      bottom: 125px;

      width: 100px;
      height: 100px;
      border: 10px solid ${Theme.colors.pseudo};
    }
  }

  &::before {
    content: "";
    height: 100%;
    width: 30%;
    background-color: ${Theme.colors.primary};
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;

    @media ${Theme.media.tablet} {
      width: 50%;
    }
  }

  @media ${Theme.media.iPadAir} {
    padding: 115px 40px 40px;
  }

  @media ${Theme.media.tablet} {
    padding: 123px 100px 90px 80px;
  }

  @media ${Theme.media.mobile} {
    padding: 125px 10px 130px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  height: 100%;

  @media ${Theme.media.mobile} {
    align-items: center;
  }
`;

//MobileApps

const MobileApps = styled.section`
  display: none;
  background-color: ${Theme.colors.secondary};
  position: relative;

  &::after {
    content: "+";
    display: inline-block;
    color: ${Theme.colors.pseudo};
    background-color: transparent;
    position: absolute;
    z-index: -1;

    right: 20%;
    top: -144%;
    transform: rotate(-45deg);
    text-align: center;
    font-size: 150px;
    font-style: normal;
    font-weight: 600;

    @media ${Theme.media.tablet} {
      top: -167%;
    }

    @media ${Theme.media.mobile} {
      top: -210%;
    }
  }

  @media ${Theme.media.tablet} {
    display: block;
  }
`;

//App.styled

const AppImg = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  background-color: ${Theme.colors.secondary};

  @media ${Theme.media.tablet} {
    height: 90px;
    width: 90px;
  }

  @media ${Theme.media.mobile} {
    width: 50px;
    height: 50px;
  }
`;

const Title = styled.h3`
  text-align: center;

  ${font({
    color: Theme.colors.font.secondary.lighter,
    weight: 600,
    // Fmax: 34,
    // Fmin: 18, //todo: при миксине слетают стили
  })}
  @media ${Theme.media.tablet} {
    font-size: 34px;
  }

  @media ${Theme.media.mobile} {
    font-size: 18px;
  }
`;

const App = styled.article`
  width: 160px;
  height: 124px;
  padding-bottom: 21px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 160px;
    height: 90px;
    border-radius: 24px;
    background-color: ${Theme.colors.primary};
    box-shadow: 0 4px 6px 0 ${Theme.colors.shadow};
    z-index: -2;
    bottom: 0;
    position: absolute;

    @media ${Theme.media.tablet} {
      width: 270px;
      height: 155px;
    }

    @media ${Theme.media.mobile} {
      width: 145px;
      height: 80px;
    }
  }

  &::after {
    content: "";
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: ${Theme.colors.secondary};
    position: absolute;
    z-index: -1;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);

    @media ${Theme.media.tablet} {
      width: 110px;
      height: 110px;
    }

    @media ${Theme.media.mobile} {
      width: 70px;
      height: 70px;
    }
  }

  @media ${Theme.media.tablet} {
    width: 270px;
    height: 210px;
    padding-bottom: 35px;
    margin: 7px;
  }

  @media ${Theme.media.mobile} {
    width: 145px;
    height: 110px;
    padding-bottom: 18px;
    margin: 0;
  }
`;

export const S = {
  InfoWrapper,
  Main,
  Apps,
  Photo,
  Description,
  Name,
  RegisterButtons,
  About,
  MediaMainTitle,
  MainTitle,
  MobileApps,
  AppImg,
  Title,
  App,
};
