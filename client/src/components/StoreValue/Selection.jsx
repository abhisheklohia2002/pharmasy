import React, { useState } from "react";
import { Select } from "@chakra-ui/react";
import "./store.css"
const SelectionOption = ({selectedOption,handleSelectChange,options}) => {

  


 

  return (
    <div>
      <Select className="Selection"
        placeholder="Popularity"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option,i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </Select>
      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )}
    </div>
  );
};

export default SelectionOption;
