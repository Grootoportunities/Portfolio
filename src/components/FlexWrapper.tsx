import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  wrap?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  gap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  background-color: ${(props) => props.backgroundColor || "#fff"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap || "0"};
`;
