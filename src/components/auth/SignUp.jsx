import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { commonModalClasses } from "../../utils/theme";
import { Container } from "../Container";
import { FormInput } from "../form/FormInput";
import { Submit } from "../form/Submit";
import { Title } from "../form/Title";
import { CustomLink } from "../CustomLink";
import { FormContainer } from "../form/FormContainer";
import { createUser } from "../../api/auth";

const validateUserInfo = ({ name, email, password }) => {
  const isValidEmail =
    /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  const isValidName = /^[a-z A-Z]+$/;

  if (!name.trim()) return { ok: false, error: "Name is missing" };
  if (!isValidName.test(name)) return { ok: false, error: "Invalid name!" };

  if (!email.trim()) return { ok: false, error: "Email is missing" };
  if (!isValidEmail.test(email)) return { ok: false, error: "Invalid email" };

  if (!password.trim()) return { ok: false, error: "Password is missing" };
  if (password.length < 8)
    return { ok: false, error: "Password must be eight character long" };

  return { ok: true, error: null };
};

export const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { name, email, password } = userInfo;

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo((prevUserInfo) => {
      return { ...prevUserInfo, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { ok, error } = validateUserInfo(userInfo);
    if (!ok) return console.log(error);
    const response = await createUser(userInfo);
    if (response.error) return console.log(response.error);
    navigate("/auth/verification", {
      state: { user: response.user },
      //replace blocks the user to go back to previous page
      replace: true,
    });
    console.log(response.user);
  };

  return (
    <FormContainer>
      <Container>
        <form onSubmit={handleSubmit} className={commonModalClasses + " w-72"}>
          <Title>Sign up</Title>
          <FormInput
            value={name}
            onChange={handleChange}
            name="name"
            placeholder="John"
            label="Name"
            type="text"
          />
          <FormInput
            value={email}
            onChange={handleChange}
            name="email"
            placeholder="john@email.com"
            label="Email"
            type="text"
          />
          <FormInput
            value={password}
            onChange={handleChange}
            name="password"
            placeholder="********"
            label="Password"
            type="password"
          />
          <Submit value="Sign up" />
          <div className="flex justify-between">
            <CustomLink to="/auth/forget-password">Forget password</CustomLink>
            <CustomLink to="/auth/signin">Sign in</CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
};
