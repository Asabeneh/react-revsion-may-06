import React from 'react';
import PropTypes from 'prop-types';

const User = ({ username }) => {
  return (
    <div>
      <h4>Welcome, {username.toUpperCase()}</h4>
    </div>
  );
};

User.propTypes = {};

export default User;
