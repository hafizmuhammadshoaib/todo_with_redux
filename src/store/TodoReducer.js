import TodoActions from "./TodoActions";


const INITIAL_STATE = {
  todo: []
};

export default function TodoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TodoActions.ADD_SUCCESS:
      console.log(action.payload);
      return Object.assign({}, state, {
        todo: [...state.todo, action.payload]
      });
      break;
    case TodoActions.DELETE_SUCCESS:
    console.log(action.payload);
    
      return Object.assign({}, state, {
        todo: state.todo.filter(value => value.key !== action.payload)
      });
      break;
    case TodoActions.UPDATE_SUCCESS:
      
      let index = state.todo.findIndex(
        element => element.key == action.payload.key
      );
      let array = [...state.todo];
      array[index].task=action.payload.task
      
      return Object.assign({},state,{todo:array})
      break;
    case TodoActions.RENDER_SUCC:
      let obj1 = { ...state };
      obj1.todo = action.payload;
      return obj1;
      break;
    default:
      return state;
  }
}
