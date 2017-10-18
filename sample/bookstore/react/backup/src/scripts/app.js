
import React from 'react'
import ReactDOM from "react-dom"
    //Popup = require("./components/popup"),
import App from "./components/app"

import '../styles/index.css'
import  * as  redux from 'redux'
import * as reactRedux from 'react-redux'
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk'

import "babel-polyfill";

const store = redux.createStore(reducer, redux.applyMiddleware(thunkMiddleware))
//const store = createStore(reducer, applyMiddleware(thunkMiddleware)) // lets us dispatch() functions


ReactDOM.render(
  <reactRedux.Provider store={store}>
    <App />
  </reactRedux.Provider>,
  document.getElementById("root")
)


// const render = () => ReactDOM.render(<Table />, mountNode);

// render()
// store.subscribe(() => {
//   render()
// });
