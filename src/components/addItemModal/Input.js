import React from "react";

function Input({ variable, onChange, label, placeholder, width, icon }) {
  return (
    <div className={`${width} mt-4`}>
      <label // ----- Input label
        className={`text-gray-400 text-sm tracking-wider font-semibold pl-1`}
      >
        {label}
      </label>
      <br />
      <div // ------ Input Container w/ border
        className={`w-full border border-gray-200 p-2 rounded flex items-center
         outline-none`}
      >
        <span className={`text-gray-400`}>{icon}</span>
        <input // ------ Input
          type="text"
          className={`pl-2 w-full h-full outline-none text-sm tracking-wider font-semibold`}
          value={variable}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default Input;
