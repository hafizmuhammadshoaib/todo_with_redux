export default class TodoActions {
    static ADD = 'ADD';
    static DELETE = 'DELETE';
    static UPDATE = 'UPDATE';
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
    static update(id,inputValue){
        return {
            type:TodoActions.UPDATE,
            payload:{id:id,inputValue:inputValue}
        }
    }
}