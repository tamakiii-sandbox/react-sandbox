import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "./src/alert.js";
    document.getElementById('zucks_home').replaceWith(script)
  }

  render() {
    return (
      <>
        <h1>hello</h1>
        <div id="zucks_home"></div>
      </>
    )
  }
}

// Render your table
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
