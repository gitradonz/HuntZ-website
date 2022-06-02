import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "./Contact.module.css";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";

const StyledFooterText = styled.p`
  font-size: 0.6rem;
`;

export default function Contact() {
  const [sended, setSended] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <FormGroup>
          <Title>Send me a mail</Title>
          <Form
            onSubmit={handleSubmit((data) => {
              fetch("/api/contact", {
                method: "post",
                body: JSON.stringify(data),
              })
                .then((a) => {
                  console.log(a);
                  a.status === 200 && setSended(true);
                })
                .catch((e) => console.log(e));
            })}
          >
            {sended ? (
              <p>Message sent !</p>
            ) : (
              <>
                <div>
                  <Input
                    {...register("email", {
                      required: "Email required.",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Your Email..."
                  ></Input>
                  <Label>{errors.email?.message}</Label>
                </div>
                <div>
                  <StyledTextarea
                    {...register("message", {
                      required: "Message required.",
                      minLength: {
                        value: 10,
                        message: "Minimum 10 characters.",
                      },
                    })}
                    placeholder="Message..."
                  ></StyledTextarea>
                  <Label>{errors.message?.message}</Label>
                </div>
                <Button>SEND</Button>{" "}
              </>
            )}
          </Form>
        </FormGroup>
      </main>
      <Footer>
        <StyledFooterText>
          all right reserved © - radonzStudio@2022
        </StyledFooterText>
      </Footer>
    </div>
  );
}

const FormGroup = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5em;
  color: var(--errorLabel);
  display: block;
  padding-left: 0.5em;
`;

const Title = styled.h3`
  font-size: xx-large;
  color: var(--black);
  text-align: center;
`;

const StyledTextarea = styled.textarea`
  min-width: 300px;
  min-height: 100px;
  resize: none;
  overflow: hidden;
  outline: none;
  border: none;
  overflow-y: scroll;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding: 0.5em 1em;
  background: var(--blue-50);
`;

const Input = styled.input`
  padding: 0.5em 1em;
  background: var(--blue-50);
  border: none;
  border-radius: 3px;
  min-width: 300px;
  margin-bottom: 0.5em;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid var(--secondaryColor);
  color: var(--secondaryColor);
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    border: 2px solid var(--primaryColor);
    color: var(--primaryColor);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
