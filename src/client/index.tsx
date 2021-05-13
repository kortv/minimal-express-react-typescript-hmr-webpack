import React, { createElement, FC } from 'react'
import ReactDOM from 'react-dom'
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   useParams
// } from "react-router-dom";
import 'antd/dist/antd.css'

import Login from './Login/index.tsx'

if (module.hot) {
  module.hot.accept()
}

const App: FC = () => {
  return <Login />
}

ReactDOM.render(createElement(App), document.getElementById('root'))
