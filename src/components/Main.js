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
                title="Everyobdy is enjoying React"
                year={new Date().getFullYear()}
            >
                I can add text in here and I will be accessed as a child propps
      </Header>
        </main>
    );
};

Main.propTypes = {

}

export default Main
