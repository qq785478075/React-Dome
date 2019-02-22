import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';//中间件  异步处理createStore
import addTodoList from './action/addTodoList'
import thunkAdd from './action/thunkAdd'

const reducers = combineReducers({
    list:addTodoList,
    thunkNum:thunkAdd
});

const store = createStore(reducers,{},applyMiddleware(thunk));

const rederPage = ()=>{
    ReactDOM.render(<App state ={store}/>, document.getElementById('root'));
}
rederPage();
//当store发生改变时，触发页面更新
store.subscribe(rederPage);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
