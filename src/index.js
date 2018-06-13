import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo.jsx'
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import TodoApp from './store/TodoReducer';
import {store} from './store/index'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Provider store={store}><Todo/></Provider>, document.getElementById('root'));
registerServiceWorker();
