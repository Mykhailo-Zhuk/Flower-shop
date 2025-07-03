import "../../styles/SortByInput.css";
import { useState } from "react";
import { sortOptions } from "../../Data/mainMenuData";

const SortByInput = () => {
  const [sorts, setSorts] = useState(sortOptions[0].value);
  return (
    <div className="sortby-row">
      <div className="input-wrapper">
        <img
          src="/public/ЕлементиАнглійськіТроянди/14.png"
          alt=""
          className="input-icon"
        />
        <select
          className="input-with-icon"
          value={sorts}
          onChange={(e) => setSorts(e.target.value)}
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortByInput;
