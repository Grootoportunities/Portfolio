import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  wrap?: string;
  gap?: string;
  // backgroundColor?: string;
  // width?: string;
  // height?: string;
  // padding?: string;
  // margin?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  align-content: ${(props) => props.alignContent || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || "0"};
`;
