import React from "react";
import { AuthProvider } from "./auth-provider";
import MoviesProvider from "./MoviesProvider";
import { NotificationProvider } from "./notification-provider";
import { ThemeProvider } from "./theme-provider";
import { SearchProvider } from "./search-provider";

export const ContextProvider = ({ children }) => {
  return (
    //Der innere Provider hat Zugriff auf den äußeren
    <NotificationProvider>
      <SearchProvider>
        <MoviesProvider>
          <AuthProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </AuthProvider>
        </MoviesProvider>
      </SearchProvider>
    </NotificationProvider>
  );
};
