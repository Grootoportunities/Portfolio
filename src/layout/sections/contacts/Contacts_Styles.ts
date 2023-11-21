import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

//Contacts

const Contacts = styled.section`
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

const Form = styled.form`
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

//Coordinator

const Coordinator = styled.div`
  display: flex;
  align-items: center;
`;

const CoordinatorTitle = styled.h4`
  color: ${Theme.colors.font.secondary.darker};
  font-size: 16px;
  font-weight: 500;

  @media ${Theme.media.tablet} {
    font-size: 30px;
  }

  @media ${Theme.media.mobile} {
    font-size: 18px;
  }
`;

const CoordinatorText = styled.span`
  color: ${Theme.colors.font.secondary.dark};
  font-size: 12px;
  font-weight: 400;

  @media ${Theme.media.tablet} {
    font-size: 23px;
  }

  @media ${Theme.media.mobile} {
    font-size: 14px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const S = {
  Contacts,
  Contact,
  Form,
  Coordinators,
  FormTitle,
  FieldArea,
  Field,
  Coordinator,
  CoordinatorTitle,
  CoordinatorText,
  Info,
};
