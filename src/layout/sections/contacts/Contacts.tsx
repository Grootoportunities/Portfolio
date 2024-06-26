import React, { ElementRef, useRef } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Coordinator } from "./coordinator/Coordinator";
import { Button } from "../../../components/Button";
import { Socials } from "../../../components/socials/Socials";
import { Container } from "../../../components/Container";
import emailjs from "@emailjs/browser";
import { S } from "./Contacts_Styles";

const socialItems: Array<{ iconId: string; link: string }> = [
  { iconId: "GitHub", link: "https://github.com/Grootoportunities" },
  { iconId: "Instagram", link: "https://www.instagram.com/daniellbili/" },
  { iconId: "Telegram", link: "https://t.me/Grootoportunities" },
  {
    iconId: "LinkedIn",
    link: "https://www.linkedin.com/in/daniil-lameika-844825284/",
  },
];

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
    text: "daniillameika@gmail.com",
  },
];

export const Contacts: React.FC = () => {
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
    <S.Contacts id={"contacts"}>
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
          <S.Contact>
            <S.Form ref={form} onSubmit={sendEmail}>
              <S.FormTitle>GET IN TOUCH</S.FormTitle>
              <S.FieldArea>
                <S.Field
                  required
                  placeholder={"E-Mail"}
                  type={"email"}
                  name={"user_email"}
                />
                <S.Field
                  required
                  placeholder={"Phone"}
                  type={"number"}
                  name={"user_phone"}
                />
              </S.FieldArea>
              <S.Field
                required
                placeholder={"Message"}
                as={"textarea"}
                name={"message"}
              />
              <Button type="submit">Send</Button>
            </S.Form>
            <S.Coordinators>
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
            </S.Coordinators>
          </S.Contact>
          <Socials socialItems={socialItems} />
        </FlexWrapper>
      </Container>
    </S.Contacts>
  );
};
