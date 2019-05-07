import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  error
}) => {
  return (
    <div>
      {(label && type ==='text') && <label htmlFor = {name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
        {(label && type !== 'text') && <label htmlFor={name}>{label}</label>}
      {error && <small>{error}</small>}

    </div>
  );
};
InputField.defaultProps = {
    type:'text'
}
InputField.propTypes = {

};

export default InputField;
