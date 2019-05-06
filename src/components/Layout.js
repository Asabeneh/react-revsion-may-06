import React from 'react'
import PropTypes from 'prop-types'

const Layout = props => {
    return (
        <div>
            <p>{props.children}</p>
        </div>
    );
};

Layout.propTypes = {

}

export default Layout

