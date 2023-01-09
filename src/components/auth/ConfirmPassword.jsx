import React from "react";
import { Container } from "../Container";
import { FormInput } from "../form/FormInput";
import { Submit } from "../form/Submit";
import { Title } from "../form/Title";

export const ConfirmPassword = () => {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-72 space-y-6">
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
    </div>
  );
};
