import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const HTMLPage = props => {
    return (
        <div>
            <h3>Lets learn about HTML</h3>
        </div>
    );
};
const CSSPage = props => {
    return (
        <div>
            <h3>Lets learn about CSS</h3>
        </div>
    );
};
const JSPage = props => {
    return (
        <div>
            <h3>Lets learn about JS</h3>
        </div>
    );
};
const Topics = props => {
    const path = props.match.path;
    console.log(path);
    console.log(props);
    return (
        <div>
            <h2>Topics</h2>
            <hr />
            <ul>
                <li>
                    <NavLink to={`${path}/html`}>HTML</NavLink>
                </li>
                <li>
                    <NavLink to={`${path}/css`}>CSS</NavLink>
                </li>
                <li>
                    <NavLink to={`${path}/js`}>JavaScript</NavLink>
                </li>
            </ul>
            <Route path={`${path}/html`} component={HTMLPage} />
            <Route path={`${path}/css`} component={CSSPage} />
            <Route path={`${path}/js`} component={JSPage} />
        </div>
    );
};

Topics.propTypes = {

}

export default Topics
