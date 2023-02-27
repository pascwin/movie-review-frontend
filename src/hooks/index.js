import { useContext } from "react";
import { AuthContext } from "../context/auth-provider";
import { NotificationContext } from "../context/notification-provider";
import { ThemeContext } from "../context/theme-provider";
import { SearchContext } from "../context/search-provider";

export const useTheme = () => useContext(ThemeContext);
export const useNotification = () => useContext(NotificationContext);
export const useAuth = () => useContext(AuthContext);
export const useSearch = () => useContext(SearchContext);