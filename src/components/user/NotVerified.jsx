import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Container } from "../Container";

export const NotVerified = () => {
  const { authInfo } = useAuth();
  const { isLoggedIn } = authInfo;
  const isVerified = authInfo.profile?.isVerified;

  const navigate = useNavigate();

  const navigateToVerfification = () => {
    navigate("auth/verification", { state: { user: authInfo.profile } });
  };

  return (
    <Container>
      {isLoggedIn && !isVerified ? (
        <p className="text-lg text-center bg-blue-50 p-2">
          Your Account is not verified. Check your Emails to verify Account. Or:
          <button
            onClick={navigateToVerfification}
            className="text-blue-500 font-semibold hover:underline">
            Click here to verify your account
          </button>
        </p>
      ) : null}
    </Container>
  );
};
