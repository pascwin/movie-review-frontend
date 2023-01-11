import React from "react";

export const FormInput = ({ name, placeholder, label, ...rest }) => {
  return (
    <div className="flex flex-col-reverse">
      {/* peer property makes it possible to stick the following tag to the tag before and 
            use focus in combination with peer we use flex-col-reverse to switch the elements*/}
      <input
        id={name}
        name={name}
        className="bg-transparent rounded border-2 dark:border-dark-subtle border-light-subtle
                            w-full text-lg outline-none dark:focus:border-white focus:border-primary p-1
                          dark:text-white peer transition"
        placeholder={placeholder}
        {...rest}
      />
      <label
        className="font-semibold dark:text-dark-subtle text-light-subtle 
            dark:peer-focus:text-white peer-focus:text-primary transition self-start"
        htmlFor={name}>
        {label}
      </label>
    </div>
  );
};
