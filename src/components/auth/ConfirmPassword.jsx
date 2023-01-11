import React from "react";
import { commonModalClasses } from "../../utils/theme";
import { Container } from "../Container";
import { FormContainer } from "../form/FormContainer";
import { FormInput } from "../form/FormInput";
import { Submit } from "../form/Submit";
import { Title } from "../form/Title";

export const ConfirmPassword = () => {
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses + " w-96"}>
          <Title>Enter new Password</Title>
          <FormInput
            name="password"
            placeholder="*******"
            label="New Password"
            type="password"
          />
          <FormInput
            name="confirmPassword"
            placeholder="*******"
            label="Confirm Password"
            type="password"
          />
          <Submit value="Confirm Password" />
        </form>
      </Container>
    </FormContainer>
  );
};
