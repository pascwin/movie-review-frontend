import React from "react";
import { AuthProvider } from "./auth-provider";
import { NotificationProvider } from "./notification-provider";
import { ThemeProvider } from "./theme-provider";

export const ContextProvider = ({ children }) => {
  return (
    //Der innere Provider hat Zugriff auf den äußeren
    <NotificationProvider>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </NotificationProvider>
  );
};
