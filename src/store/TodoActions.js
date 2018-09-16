import fire from './firebase';


// var rootRef = fire.database().ref('/');
export default class TodoActions {
    static ADD = 'ADD';
    static ADD_SUCCESS='ADD_SUCCESS';
    static DELETE = 'DELETE';
    static DELETE_SUCCESS='DELETE_SUCCESS';
    static UPDATE = 'UPDATE';
    static UPDATE_SUCCESS='UPDATE_SUCCESS';
    static RENDER = 'RENDER';
    static RENDER_SUCC = 'RENDER_SUCC';
   
    static add(value) {
        return {
            type: TodoActions.ADD,
            payload: value
        }
    }
    static delete(id) {
        return {
            type: TodoActions.DELETE,
            payload: id
        }
    }
    static update(id, inputValue) {
        return {
            type: TodoActions.UPDATE,
            payload: { _id: id, task: inputValue }
        }
    }
    static render(){
        return{
            type:TodoActions.RENDER
        }
    }
    

}