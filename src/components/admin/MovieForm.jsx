import React from "react";
import { commonInputClasses } from "../../utils/theme";
import { LiveSearch } from "../LiveSearch";
import { TagsInput } from "../TagsInput";

export const MovieForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-3">
      <div className="w-[70%] space-y-5">
        <div>
          <Label htmlFor="title">Title</Label>
          <input
            id="title"
            type="text"
            className={commonInputClasses + " border-b-2 font-semibold text-xl"}
            placeholder="Titanic"
          />
        </div>

        <div>
          <Label htmlFor="storyLine">Story line</Label>
          <textarea
            id="storyLine"
            className={commonInputClasses + " border-b-2 resize-none h-24"}
            placeholder="Movie storyline..."></textarea>
        </div>
        <div>
            
        </div>
        <div>
        <Label htmlFor="tags">Tags</Label>
        <TagsInput name="tags" />
        </div>
        <LiveSearch />
      </div>
      <div className="w-[30%] h-5 bg-blue-400"></div>
    </form>
  );
};

const Label = ({ children, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="dark:text-dark-subtle text-light-subtle font-semibold">
      {children}
    </label>
  );
};
