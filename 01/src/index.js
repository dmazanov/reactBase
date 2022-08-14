import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <div className="wrapper">
        <h1 className="mainHeading">Hello world!</h1>
        <h2 className="secondaryHeading">Hello React!</h2>
    </div>
    )

ReactDOM.render(
    //rendered element
    <App />,
    // target
  document.getElementById('root')
)