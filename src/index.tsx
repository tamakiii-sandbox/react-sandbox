import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>hello</h1>
        <script src="./src/alert.js"></script>
      </>
    )
  }
}

// Render your table
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
