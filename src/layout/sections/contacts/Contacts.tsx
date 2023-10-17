import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Coordinator } from "./coordinator/Coordinator";
import { Button } from "../../../components/Button";
import { Socials } from "../../../components/socials/Socials";

// const iconsCoordinators = ["location", "telephone", "email"];
// const titles = ["Location", "Phone", "Email"];
// const texts = ["Minsk", "+375 (29) 829-87-12", "tapir1337@mail.ru"];

const iconsSocial = ["Instagram", "Telegram"];

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>CONTACT</SectionTitle>
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
              <Field placeholder={"E-Mail"} />
              <Field placeholder={"Phone"} />
            </FieldArea>
            <Field placeholder={"Message"} as={"textarea"} />
            <Button type="submit">Send</Button>
          </StyledForm>
          <Coordinators>
            {/*<Coordinator*/}
            {/*  iconId={iconsCoordinators}*/}
            {/*  title={titles}*/}
            {/*  text={texts}*/}
            {/*/> todo: Не получается сделать структуру мапом*/}
            <Coordinator
              iconId={"location"}
              title={"Location"}
              text={"Minsk"}
            />
            <Coordinator
              iconId={"telephone"}
              title={"Phone"}
              text={"+375 (29) 829-87-12"}
            />
            <Coordinator
              iconId={"email"}
              title={"Email"}
              text={"tapir1337@mail.ru"}
            />
          </Coordinators>
        </Contact>
        <Socials iconId={iconsSocial} />
      </FlexWrapper>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 50vh;
`;

const Contact = styled.article`
  //border: 1px solid red; //todo: to delete when fix

  display: flex;
  justify-content: space-around;
  align-items: center;

  max-width: 932px;
  width: 100%;
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

const Field = styled.input``;
