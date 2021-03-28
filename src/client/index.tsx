import React, { createElement, FC } from 'react'
import ReactDOM from 'react-dom'

/*if (module.hot) {
  module.hot.accept();
}*/

const LikeButton: FC = () => {
    return <>{'hi'}</>
}

const domContainer = document.getElementById('root');
ReactDOM.render(createElement(LikeButton), domContainer);