import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import { S } from "../Contacts_Styles";

type CoordinatorPropsType = {
  iconId: string;
  title: string;
  text: string;
  extraText?: string;
};

export const Coordinator: React.FC<CoordinatorPropsType> = (
  props: CoordinatorPropsType,
) => {
  return (
    <S.Coordinator>
      <Icon iconId={props.iconId} viewBox={"0 0 50 25"} />
      <S.Info>
        <S.CoordinatorTitle>{props.title}</S.CoordinatorTitle>
        <S.CoordinatorText>{props.text}</S.CoordinatorText>
        <S.CoordinatorText>{props.extraText}</S.CoordinatorText>
      </S.Info>
    </S.Coordinator>
  );
};
