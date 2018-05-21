import TodoActions from './TodoActions';

const INITIAL_STATE = {
    todo: [],


}


export default function TodoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TodoActions.ADD:
            return Object.assign({}, state, { todo: [...state.todo, action.payload] })
            break;
        case TodoActions.DELETE:
            return Object.assign({}, state, { todo: state.todo.filter(value => value.id !== action.payload) })
            break;
        case TodoActions.UPDATE:
            let obj = {...state};
            let index = obj.todo.findIndex(element => element.id == action.payload.id)
            obj.todo[index].task = action.payload.inputValue;
            return obj;
            break;
        default:
            return state;
    }

}