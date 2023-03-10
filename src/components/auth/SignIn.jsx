import React, { useState } from "react";
import { useAuth, useNotification } from "../../hooks";
import { commonModalClasses } from "../../utils/theme";
import { Container } from "../Container";
import { CustomLink } from "../CustomLink";
import { FormContainer } from "../form/FormContainer";
import { FormInput } from "../form/FormInput";
import { Submit } from "../form/Submit";
import { Title } from "../form/Title";
import { isValidEmail } from "../../utils/helper";

const validateUserInfo = ({ email, password }) => {
  if (!email.trim()) return { ok: false, error: "Email is missing" };
  if (!isValidEmail(email)) return { ok: false, error: "Invalid email" };

  if (!password.trim()) return { ok: false, error: "Password is missing" };
  if (password.length < 8)
    return { ok: false, error: "Password must be eight character long" };

  return { ok: true, error: null };
};

export const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { updateNotification } = useNotification();
  const { handleLogin, authInfo } = useAuth();
  const { isPending } = authInfo;

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo((prevUserInfo) => {
      return { ...prevUserInfo, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { ok, error } = validateUserInfo(userInfo);

    if (!ok) return updateNotification("error", error);
    handleLogin(userInfo.email, userInfo.password);
  };

  return (
    <FormContainer>
      <Container>
        <form onSubmit={handleSubmit} className={commonModalClasses + " w-72"}>
          <Title>Sign in</Title>
          <FormInput
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            placeholder="john@email.com"
            label="Email"
            type="text"
          />
          <FormInput
            name="password"
            value={userInfo.password}
            onChange={handleChange}
            placeholder="********"
            label="Password"
            type="password"
          />
          <Submit value="Sign in" busy={isPending} />
          <div className="flex justify-between">
            <CustomLink to="/auth/forget-password">Forget password</CustomLink>
            <CustomLink to="/auth/signup">Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
};
