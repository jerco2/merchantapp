import React from "react";

function InputSizes({ width, label, category, onChange }) {
  const trigger = ["Coffee-Free", "Coffee Base", "Fries"];
  return (
    <div
      className={`${width} flex flex-col mt-4 ${
        trigger.includes(category) ? "block" : "hidden"
      }`}
    >
      <label // ------- Input label
        className={`text-gray-400 text-sm tracking-wider font-semibold pl-1`}
      >
        {label}
      </label>
      <div className={`flex items-center`} onChange={onChange}>
        <input // ----- Radio button small
          className={`ml-2 cursor-pointer`}
          type="radio"
          name="size"
          value="Small"
        />
        <span className={`text-sm font-semibold text-gray-400 pl-1`}>
          Small
        </span>

        <input // ----- Radio button regular
          className={`ml-2 cursor-pointer`}
          type="radio"
          name="size"
          value="Regular"
        />
        <span className={`text-sm font-semibold text-gray-400 pl-1`}>
          Regular
        </span>

        <input // ----- Radio button large
          className={`ml-2 cursor-pointer`}
          type="radio"
          name="size"
          value="Large"
        />
        <span className={`text-sm font-semibold text-gray-400 pl-1`}>
          Large
        </span>
      </div>
    </div>
  );
}

export default InputSizes;
