import React from "react";
import { commonModalClasses } from "../../utils/theme";
import { Container } from "../Container";
import { CustomLink } from "../CustomLink";
import { FormContainer } from "../form/FormContainer";
import { FormInput } from "../form/FormInput";
import { Submit } from "../form/Submit";
import { Title } from "../form/Title";


export const SignIn = () => {
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses + " w-72"}>
          <Title>Sign in</Title>
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
          <Submit value="Sign in" />
          <div className="flex justify-between">
            <CustomLink to="/auth/forget-password">Forget password</CustomLink>
            <CustomLink to="/auth/signup">Sign up</CustomLink>
          </div>
        </form>
      </Container>
      </FormContainer>
  );
};
