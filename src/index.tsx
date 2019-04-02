import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
		script.src = "./src/document-write.js";
    document.getElementById('my-script').replaceWith(script)
  }

  render() {
    return (
      <>
        <h1>hello</h1>
        <div id="my-script"></div>
        <div id="my-ad"></div>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
