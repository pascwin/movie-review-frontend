import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { Container } from "./Container";
import { NotVerified } from "./user/NotVerified";

export const Home = () => {
  return <NotVerified />;
};
