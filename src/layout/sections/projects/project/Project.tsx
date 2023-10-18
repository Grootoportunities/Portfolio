import React from "react";
import styled from "styled-components";

type ProjectPropsType = {
  imgSrc: string;
  title: string;
  description: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={props.imgSrc} alt={"Project"} />
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Link href="#">VIEW CODE</Link>
      <Link href="#">VIEW PROJECT</Link>
    </StyledProject>
  );
};

const StyledProject = styled.article`
  background-color: #f9f9fc;
  max-width: 616px;
  width: 100%;
  margin: 38px;
`;

const Image = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const Title = styled.h3``;

const Description = styled.p``;

const Link = styled.a``;
