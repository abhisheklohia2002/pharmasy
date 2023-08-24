import React from "react";
import { Select } from "@chakra-ui/react";

const SelectOption = ({ options, selectedOption, onChange }) => {
  return (
    <Select placeholder = "Quantity"  value={selectedOption} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default SelectOption;
