"use client";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";

function SelectGender() {
  const [selectedMale, setSelectedMale] = useState(false);
  const [selectedFemale, setSelectedFemale] = useState(false);
  return (
    <div className="flex items-center justify-between w-[30%]">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={selectedMale}
          onChange={(e) => {
            setSelectedFemale(false);

            setSelectedMale(e.target.checked);
          }}
          className="w-4 h-4 cursor-pointer"
        />
        <label className="ml-1">Male</label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={selectedFemale}
          onChange={(e) => {
            setSelectedMale(false);
            setSelectedFemale(e.target.checked);
          }}
          className="w-4 h-4 cursor-pointer"
        />

        <label className="ml-1">Female</label>
      </div>
    </div>
  );
}

export default SelectGender;
