import React, { createContext, useState } from "react";

export const NotificationContext = createContext();

let timeoutId;

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState("");
  const [classes, setClasses] = useState("");

  const updateNotification = (type, value) => {
    //clears timeout if exist, when clicking and new error
    if (timeoutId) clearTimeout(timeoutId)
    switch (type) {
      case "error":
        setClasses("bg-red-500");
        break;
      case "success":
        setClasses("bg-green-500");
        break;
      case "warning":
        setClasses("bg-orange-500");
        break;
      default:
        setClasses("bg-green-500");
    }
    setNotification(value);
    timeoutId = setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ updateNotification }}>
      {children}
      {notification && (
        <div className="fixed left-1/2 -translate-x-1/2 top-24">
          <div className="shadow-md shadow-gray-400 bounce-custom">
            <p
              className={
                classes + " rounded text-white px-4 py-2 font-semibold"
              }>
              {notification}
            </p>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
};
