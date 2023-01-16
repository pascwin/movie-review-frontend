import React from "react";
import { AuthProvider } from "./auth-provider";
import { NotificationProvider } from "./notification-provider";
import { ThemeProvider } from "./theme-provider";

export const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </NotificationProvider>
    </AuthProvider>
  );
};
