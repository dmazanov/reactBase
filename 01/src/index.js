import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createElement(
    'div',
    {
        className: 'wrapper',
    },
    [
        React.createElement(
          'h1',
            {
                className: 'mainHeading',
            },
          'Hello world'
        ),
        React.createElement(
            'h2',
            {
                className: 'secondaryHeading',
            },
            'Hello react'
        )
    ]
);

ReactDOM.render(
    //rendered element
    App,
    // target
  document.getElementById('root')
)