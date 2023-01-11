import React from "react";
import { commonModalClasses } from "../../utils/theme";
import { Container } from "../Container";
import { FormInput } from "../form/FormInput";
import { Submit } from "../form/Submit";
import { Title } from "../form/Title";
import { CustomLink } from "../CustomLink";
import { FormContainer } from "../form/FormContainer";

export const SignUp = () => {
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses + " w-72"}>
          <Title>Sign up</Title>
          <FormInput name="name" placeholder="John" label="Name" type="text" />
          <FormInput
            name="email"
            placeholder="john@email.com"
            label="Email"
            type="text"
          />
          <FormInput
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
