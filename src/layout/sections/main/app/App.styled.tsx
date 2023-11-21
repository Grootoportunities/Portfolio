import React from "react";
import { S } from "../Main_Styles";

type AppPropsType = {
  title: string;
  imgSrc: string;
};

export const App: React.FC<AppPropsType> = (props: AppPropsType) => {
  return (
    <S.App>
      <S.AppImg src={props.imgSrc} />
      <S.Title>{props.title}</S.Title>
    </S.App>
  );
};
