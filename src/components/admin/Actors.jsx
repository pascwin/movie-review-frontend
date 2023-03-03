import React, { useState, useEffect, useCallback } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { getActors } from "../../api/actor";
import { useNotification } from "../../hooks";
import NextAndPrevButton from "../NextAndPrevButton";

let currentPageNo = 0;
const limit = 2;

export default function Actors() {
  const [actors, setActors] = useState([]);
  const [reachedToEnd, setReachedToEnd] = useState(false);
  const { updateNotification } = useNotification();

  const fetchActors = useCallback(async (pageNo) => {
    const { profiles, error } = await getActors(pageNo, limit);
    if (error) return updateNotification("error", error);

    if (!profiles.length) {
      currentPageNo = pageNo - 1;
      return setReachedToEnd(true);
    }

    setActors([...profiles]);
  }, [updateNotification]) 

  const handleOnNextClick = () => {
    if (reachedToEnd) return;
    currentPageNo += 1;
    fetchActors(currentPageNo);
  };

  const handleOnPrevClick = () => {
    if (currentPageNo <= 0) return;
    if (reachedToEnd) setReachedToEnd(false);

    currentPageNo -= 1;
    fetchActors(currentPageNo);
  };

  useEffect(() => {
    fetchActors(currentPageNo);
  }, [fetchActors]);

  return (
    <div className="p-5">
      <div className="grid grid-cols-4 gap-5 p-5">
        {actors.map((actor) => (
          <ActorProfile profile={actor} key={actor.id} />
        ))}
      </div>

      <NextAndPrevButton
        className="mt-5"
        onNextClick={handleOnNextClick}
        onPrevClick={handleOnPrevClick}
      />
    </div>
  );
}

const ActorProfile = ({ profile }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOnMouseEnter = () => {
    setShowOptions(true);
  };

  const handleOnMouseLeave = () => {
    setShowOptions(false);
  };

  const { name, about = "", avatar } = profile;

  if (!profile) return null;

  return (
    <div className="bg-white shadow dark:shadow dark:bg-secondary rounded h-20 overflow-hidden">
      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className="flex cursor-pointer relative"
      >
        <img
          src={avatar}
          alt={name}
          className="w-20 aspect-square object-cover"
        />

        <div className="px-2">
          <h1 className="text-xl text-primary dark:text-white font-semibold">
            {name}
          </h1>
          <p className="text-primary dark:text-white opacity-70">
            {about.substring(0, 50)}
          </p>
        </div>
        <Options visible={showOptions} />
      </div>
    </div>
  );
};

const Options = ({ visible, onDeleteClick, onEditClick }) => {
  if (!visible) return null;

  return (
    <div className="absolute inset-0 bg-primary bg-opacity-25 backdrop-blur-sm flex justify-center items-center space-x-5">
      <button
        onClick={onDeleteClick}
        className="p-2 rounded-full bg-white text-primary hover:opacity-80 transition"
        type="button"
      >
        <BsTrash />
      </button>
      <button
        onClick={onEditClick}
        className="p-2 rounded-full bg-white text-primary hover:opacity-80 transition"
        type="button"
      >
        <BsPencilSquare />
      </button>
    </div>
  );
};
