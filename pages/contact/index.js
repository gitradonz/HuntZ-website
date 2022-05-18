import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "./Contact.module.css";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const StyledFooterText = styled.p`
  font-size: 0.6rem;
`;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div>
            <input
              {...register("email", { required: "Email required." })}
              placeholder="Email.."
            ></input>
            <span>{errors.email?.message}</span>
          </div>
          <div>
            <input
              {...register("message", {
                required: "Message required.",
                minLength: { value: 10, message: "Minimum 10 characters." },
              })}
              placeholder="Message..."
            ></input>
            <span>{errors.message?.message}</span>
          </div>
          <button>ENVIAR</button>
        </form>
      </main>
      <Footer>
        <StyledFooterText>all right reserved</StyledFooterText>
      </Footer>
    </div>
  );
}
