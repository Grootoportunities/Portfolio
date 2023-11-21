import React from "react";
import { Icon } from "../icon/Icon";
import { S } from "./Socials_Styles";

type SocialPropsType = {
  socialItems: Array<{ iconId: string; link: string }>;
};

export const Socials: React.FC<SocialPropsType> = (props: SocialPropsType) => {
  return (
    <S.Socials>
      {props.socialItems.map((item, index) => {
        return (
          <S.SocialItem key={index}>
            <S.SocialLink href={item.link} key={index} target={"_blank"}>
              <Icon
                width="50"
                height={"50"}
                viewBox={"0 0 25 25"}
                iconId={item.iconId}
              />
            </S.SocialLink>
          </S.SocialItem>
        );
      })}
    </S.Socials>
  );
};
