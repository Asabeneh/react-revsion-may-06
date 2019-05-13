import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar';

const Header = props => {
    return (
        <header>
            <h1>{props.title}</h1>
            <p>Year:{props.year}</p>
            <p>{props.children}</p>
            <Navbar />
        </header>
    );
};

Header.propTypes = {

}

export default Header
