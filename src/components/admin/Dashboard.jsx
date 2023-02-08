import React, { useEffect, useState, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export const Dashboard = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="flex items-center justify-between relative">
      <input
        type="text"
        className="border-2 dark:border-dark-subtle border-light-subtle dark:focus:border-white focus:border-primary
        dark:text-white transition bg-transparent rounded text-lg p-1 outline-none"
        placeholder="Search Movies..."
      />
      <button
        onClick={() => {
          setShowOptions(true);
        }}
        className="flex items-center space-x-2 border-secondary hover:border-primary text-secondary
        transition font-semibold border-2 rounded text-lg px-3 py-1 hover:opacity-80">
        <span>Create</span>
        <AiOutlinePlus />
      </button>
      <CreateOptions
        visible={showOptions}
        onClose={() => {
          setShowOptions(false);
        }}
      />
    </div>
  );
};

const CreateOptions = ({ visible, onClose }) => {
  const container = useRef();
  const containerID = "option-container";
  useEffect(() => {
    const handleClose = (event) => {
      if (!visible) return;
      // container.current.classList.remove("animate-scale");
      // container.current.classList.add("animate-scale-reverse");
      // next two lines that the container doesn't close, when we click on the add buttons
      const { parentElement, id } = event.target;
      if (parentElement.id === containerID || id === containerID) return;
      if (container.current) {
        if (!container.current.classList.contains("animate-scale"))
          container.current.classList.add("animate-scale-reverse");
      }
    };
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [visible]);

  if (!visible) return null;
  return (
    <div
      id={containerID}
      ref={container}
      className="absolute right-0 top-12 flex flex-col space-y-3 p-5 
      dark:bg-secondary bg-white drop-shadow-lg rounded animate-scale"
      onAnimationEnd={(e) => {
        if (e.target.classList.contains("animate-scale-reverse")) onClose();
        e.target.classList.remove("animate-scale");
      }}>
      <Option>AddMovie</Option>
      <Option>AddActor</Option>
    </div>
  );
};

const Option = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="dark:text-white text-secondary hover:opacity-80 transition">
      {children}
    </button>
  );
};
