import React from "react";
import { NavLink } from "../../../../components/Link";
import { S } from "../Biography_Styles";

export type TabsStatusType = "main" | "skills" | "experience" | "education";

type TabMenuPropsType = {
  tabItems: Array<{
    status: TabsStatusType;
    title: string;
  }>;
  changeFilterStatus: (value: TabsStatusType) => void;
  currentFilterStatus: string;
};

export const TabMenu: React.FC<TabMenuPropsType> = (
  props: TabMenuPropsType,
) => {
  return (
    <S.TabMenu>
      <ul>
        {props.tabItems.map((item, index) => {
          return (
            <S.ListItem
              key={index}
              active={props.currentFilterStatus === item.status}
            >
              <NavLink
                as={"button"}
                onClick={() => {
                  props.changeFilterStatus(item.status);
                }}
              >
                {item.title}
              </NavLink>
            </S.ListItem>
          );
        })}
      </ul>
    </S.TabMenu>
  );
};
