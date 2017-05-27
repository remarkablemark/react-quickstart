import React from 'react';

/**
 * Use class because function component causes page to reload with a hard refresh.
 */
export default class App extends React.Component {
    render() {
        return <h1>Welcome to React Quickstart</h1>;
    }
}
