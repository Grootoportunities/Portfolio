import React from "react";
import { Icon } from "../icon/Icon";
import { S } from "./Socials_Styles";

export const Socials: React.FC<{ iconId: Array<string> }> = (props: {
  iconId: Array<string>;
}) => {
  return (
    <S.Socials>
      {props.iconId.map((item, index) => {
        return (
          <S.SocialItem key={index}>
            <S.SocialLink href=" " key={index}>
              <Icon
                width="50"
                height={"50"}
                viewBox={"0 0 25 25"}
                iconId={item}
              />
            </S.SocialLink>
          </S.SocialItem>
        );
      })}
    </S.Socials>
  );
};
