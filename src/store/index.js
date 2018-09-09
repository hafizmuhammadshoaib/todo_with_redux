// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html

import { combineReducers, createStore, applyMiddleware,compose } from 'redux';
// import { getFirebase,reactReduxFirebase, firebaseReducer  } from 'react-redux-firebase';
// import { combineEpics } from 'redux-observable';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import fire, { update } from './firebase'
// reducers
// import { CounterReducer } from './reducer/counter';
import TodoReducer  from './TodoReducer';

// epics
import { Epic } from './Epic';

// Application Reducers
const rootReducer = combineReducers({
    // CounterReducer: CounterReducer,
    TodoReducer
    // todoReducer: todoReducer
});
// const createStoreWithFirebase = compose(
//   reactReduxFirebase(fire), // firebase instance as first argument
//   // reduxFirestore(firebase) // <- needed if using firestore
// )(createStore)


export const rootEpic = combineEpics(
    Epic.addToDo,
    Epic.getTodos,
    Epic.delTodo,
    Epic.updateTodo

    
    // GitEpic.getFollowersData
    // more epics functions go here
)
// const rootEpic = (...args) =>
//   combineEpics(Epic.addToDo)(...args, getFirebase)
const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware);

export let store = createStore(rootReducer, createStoreWithMiddleware);