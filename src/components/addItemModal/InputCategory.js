import React from "react";

function InputCategory({ category, options, setCategory }) {
  return (
    <div className={`w-full`}>
      <label // ------- Input label
        className={`text-gray-400 text-sm tracking-wider font-semibold pl-1`}
      >
        Category
      </label>
      <br />
      <select // ------- Dropdown select
        className={`w-full laptop:w-[500px] p-2 mt-1 rounded bg-gradient-to-t from-gray-100 
        to-white outline-none cursor-pointer border border-gray-200 text-sm 
        tracking-wider font-semibold`}
        name="category"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" disabled="disabled">
          Select a category
        </option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default InputCategory;
