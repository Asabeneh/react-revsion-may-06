import React from "react";
import PropTypes from "prop-types";



const SelectField = ({ options, label, name, value, onChange }) => {
const optionList = options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)
  return (
    <div>
      <label>{label}: </label>
      <select name={name} value={value} onChange={onChange}>
      {optionList}
      </select>
    </div>
  );
};

SelectField.propTypes = {};

export default SelectField;
