import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
  checked
}) => {
  if(type === 'radio') {
    return <div>
      <input
        type= {type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      {label  && <label htmlFor={name}>{label}</label>}
      {error && <small>{error}</small>}

    </div>
  }
  else if (type === 'checkbox'){
      return <div>
        <input
          type= {type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        {label && <label htmlFor={name}>{label}</label>}
        {error && <small>{error}</small>}

      </div>
    }
  
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      {error && <small>{error}</small>}
    </div>
  )
    
};
InputField.defaultProps = {
    type:'text',
    placeholder:''
}
InputField.propTypes = {

};

export default InputField;
