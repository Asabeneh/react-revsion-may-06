import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    return (
        <header>
            <h1>{props.title}</h1>
            <p>Year:{props.year}</p>
            <p>{props.children}</p>
        </header>
    );
};

Header.propTypes = {

}

export default Header
