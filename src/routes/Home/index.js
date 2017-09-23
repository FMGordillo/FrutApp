import React from 'react';
import Home from './Home';

function action () {
    return {
        chuncks: ['home'],
        title,
        component: (
            <Layout>
                <Home />
            </Layout>
        ),
    };
}

export default action;