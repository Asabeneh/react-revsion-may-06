import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Layout from './Layout'

const Main = () => {
    return (
        <main>
            <Layout>Section one layout</Layout>
            <Layout>Section two layout</Layout>
            <Layout>Section three layout</Layout>
            <Header
                title="Everybody is enjoying React"
                year={new Date().getFullYear()}
            >
                I can add text in here and it will be accessed as a child props
      </Header>
        </main>
    );
};

Main.propTypes = {

}

export default Main
