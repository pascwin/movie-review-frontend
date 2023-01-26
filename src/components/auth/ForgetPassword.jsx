import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../hooks";
import { useAuth } from "../../hooks";
import { commonModalClasses } from "../../utils/theme";
import { Container } from "../Container";
import { CustomLink } from "../CustomLink";
import { FormContainer } from "../form/FormContainer";
import { FormInput } from "../form/FormInput";
import { Submit } from "../form/Submit";
import { Title } from "../form/Title";
import { forgetPassword } from "../../api/auth";
import { isValidEmail } from "../../utils/helper";

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { updateNotification } = useNotification();
  const { handleLogin, authInfo } = useAuth();
  const { isPending, isLoggedIn } = authInfo;

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setEmail(value);
    console.log(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValidEmail(email))
      return updateNotification("error", "Invalid email");
    const { error, message } = await forgetPassword(email);

    if (error) return updateNotification("error", error);
    updateNotification("success", message);
  };

  return (
    <FormContainer>
      <Container>
        <form onSubmit={handleSubmit} className={commonModalClasses + " w-96"}>
          <Title>Please Enter Email</Title>
          <FormInput
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="john@email.com"
            label="Email"
            type="text"
          />
          <Submit value="Send Link" />
          <div className="flex justify-between">
            <CustomLink to="/auth/signin">Sign in</CustomLink>
            <CustomLink to="/auth/signup">Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
};
