import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Coordinator } from "./coordinator/Coordinator";
import { Button } from "../../../components/Button";
import { Socials } from "../../../components/socials/Socials";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";

const iconsSocial = ["Instagram", "Telegram"];

const coordinatorsData = [
  {
    iconId: "location",
    title: "Location",
    text: "Minsk",
  },
  {
    iconId: "telephone",
    title: "Phone",
    text: "Email",
  },
  {
    iconId: "email",
    title: "Email",
    text: "tapir1337@mail.ru",
  },
];

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle sectionColor={"secondary"} pseudoColor={"secondary"}>
          CONTACT
        </SectionTitle>
        <FlexWrapper
          direction={"column"}
          alignItems={"center"}
          justifyContent={"space-around"}
          gap="65px"
        >
          <Contact>
            <StyledForm>
              <FormTitle>GET IN TOUCH</FormTitle>
              <FieldArea>
                <Field placeholder={"E-Mail"} type={"email"} name={"email"} />
                <Field placeholder={"Phone"} type={"number"} name={"Phone"} />
              </FieldArea>
              <Field placeholder={"Message"} as={"textarea"} />
              <Button type="submit">Send</Button>
            </StyledForm>
            <Coordinators>
              {coordinatorsData.map((item) => {
                return (
                  <Coordinator
                    iconId={item.iconId}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </Coordinators>
          </Contact>
          <Socials iconId={iconsSocial} />
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  background-color: ${Theme.colors.secondary};
`;

const Contact = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 932px;
  width: 100%;

  padding: 53px 113px 46px 82px;
`;

const StyledForm = styled.form`
  //border: 1px solid green; //todo: to delete when fix

  max-width: 429px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between; //todo: Почему не работает?
  gap: 23px;

  textarea {
    height: 152px;
    resize: none;
  }
`;

const Coordinators = styled.div`
  //border: 1px solid yellow; //todo: to delete when fix

  max-width: 182px;
  width: 100%;

  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //text-align: center;
`;

const FormTitle = styled.h3`
  margin: 0;
`;

const FieldArea = styled.div`
  display: flex;
  gap: 7px;
`;

const Field = styled.input`
  width: 100%;
  border: none;
  border-radius: 9px;
  background-color: ${Theme.colors.field};
  padding: 10px 30px;
  font-family: Roboto, sans-serif;
  color: ${Theme.colors.font.secondary.darker};
  font-size: 13px;
  font-weight: 400;

  &::placeholder {
    color: ${Theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 2px solid ${Theme.colors.font.secondary.dark};
  }
`;
