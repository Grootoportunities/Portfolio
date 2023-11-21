import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Footer_Styles";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={"column"} alignItems={"center"} gap={"7px"}>
        <S.FooterImage />
        <S.Copyright>All Rights Reserved 2023©</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};
