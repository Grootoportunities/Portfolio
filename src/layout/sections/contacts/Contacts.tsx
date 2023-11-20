import React, { ElementRef, useRef } from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Coordinator } from "./coordinator/Coordinator";
import { Button } from "../../../components/Button";
import { Socials } from "../../../components/socials/Socials";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";
import emailjs from "@emailjs/browser";

const iconsSocial = ["Instagram", "Telegram"];

const coordinatorsData = [
  {
    iconId: "location",
    title: "Location",
    text: "Minsk, Belarus",
  },
  {
    iconId: "telephone",
    title: "Phone",
    text: "+375 (29) 829-87-12 (МТС)",
    extraText: "+375 (44) 465-89-52 (А1)",
  },
  {
    iconId: "email",
    title: "Email",
    text: "tapir1337@mail.ru",
  },
];

export const Contacts = () => {
  const form = useRef<ElementRef<`form`>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ymf7xr8",
        "template_2eh4w5h",
        form.current,
        "LPuUZ5uTiHER9Xf0k",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    e.target.reset();
  };

  return (
    <StyledContacts id={"contacts"}>
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
            <StyledForm ref={form} onSubmit={sendEmail}>
              <FormTitle>GET IN TOUCH</FormTitle>
              <FieldArea>
                <Field
                  required
                  placeholder={"E-Mail"}
                  type={"email"}
                  name={"user_email"}
                />
                <Field
                  required
                  placeholder={"Phone"}
                  type={"number"}
                  name={"user_phone"}
                />
              </FieldArea>
              <Field
                required
                placeholder={"Message"}
                as={"textarea"}
                name={"message"}
              />
              <Button type="submit">Send</Button>
            </StyledForm>
            <Coordinators>
              {coordinatorsData.map((item) => {
                return (
                  <Coordinator
                    iconId={item.iconId}
                    title={item.title}
                    text={item.text}
                    extraText={item.extraText}
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
  position: relative;
`;

const Contact = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 130px;

  box-shadow: 8px 8px 34px 0 rgba(0, 0, 0, 0.05);

  max-width: 932px;
  width: 100%;

  padding: 50px 5px;

  @media ${Theme.media.tablet} {
    justify-content: center;
    gap: 45px;
    padding: 0;
    box-shadow: none;
  }
`;

const StyledForm = styled.form`
  max-width: 430px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;

  textarea {
    height: 152px;
    resize: none;
  }

  @media ${Theme.media.tablet} {
    box-shadow: 8px 8px 34px 0 rgba(0, 0, 0, 0.05);
    padding: 55px 80px 45px;
  }
  @media ${Theme.media.mobile} {
    padding: 30px 50px;
  }
`;

const Coordinators = styled.div`
  display: flex;
  flex-direction: column;

  @media ${Theme.media.tablet} {
    gap: 70px;
    padding: 55px 80px 45px;
    box-shadow: 15px 15px 65px 0 rgba(0, 0, 0, 0.05);
  }

  @media ${Theme.media.mobile} {
    padding: 40px 43px;
  }
`;

const FormTitle = styled.h3`
  color: ${Theme.colors.font.secondary.darker};
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
`;

const FieldArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
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
