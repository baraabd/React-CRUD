import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { transactionReducer } from './reducers/transactionReducer'

if (localStorage.getItem('transactions') == null)
  localStorage.setItem('transactions', JSON.stringify([]))
let initialState = {
  currentIndex: -1,
  list: JSON.parse(localStorage.getItem('transactions'))
}

var store = createStore(transactionReducer, initialState)

ReactDOM.render(

  <Provider store={store}>
    <App />

  </Provider>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
