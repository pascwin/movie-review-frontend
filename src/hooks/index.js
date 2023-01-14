import { useContext } from "react";
import { NotificationContext } from "../context/notification-provider";
import { ThemeContext } from "../context/theme-provider";

export const useTheme = () => useContext(ThemeContext);
export const useNotification = () => useContext(NotificationContext);
