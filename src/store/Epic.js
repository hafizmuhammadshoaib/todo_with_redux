import { Observable } from "rxjs";
import TodoActions from "./TodoActions";
// import service from "../../service/http";
import fire, { add,render,deleted,update } from "./firebase";
// import { retry } from "rxjs/operator/retry";



export class Epic {
  static addToDo(action$) {
    console.log("epic");
    return action$.ofType(TodoActions.ADD).switchMap(({ payload }) => {
      console.log(payload)
      return Observable.fromPromise(add(payload)).map(id => {
        console.log( 'ressss ', Object.assign({}, {key:id}, payload));
        return {
          type: TodoActions.ADD_SUCCESS,
          payload: Object.assign({}, {key:id}, payload)
        }
      });
    });
  }
  static getTodos(action$){
    return action$.ofType(TodoActions.RENDER).switchMap(()=>{
      return Observable.fromPromise(render()).map(array=>{
        console.log('from fierbase',array)
        return {
          type:TodoActions.RENDER_SUCC,
          payload:array
        }
      })
    })
  }
  static delTodo(action$){
    return action$.ofType(TodoActions.DELETE).switchMap(({payload})=>{
      return Observable.fromPromise(deleted(payload)).map(key=>{
        return {
          type:TodoActions.DELETE_SUCCESS,
          payload:key
        }
      })
    })
  }
  static updateTodo(action$){
    return action$.ofType(TodoActions.UPDATE).switchMap(({payload})=>{
      return Observable.fromPromise(update(payload.id,payload.inputValue)).map(obj=>{
        // console.log(key,value);
        return {
          type:TodoActions.UPDATE_SUCCESS,
          payload:obj
        }
      })
    })
  }
  // static addToDo = (action$, store, getFirebase) =>(
  // action$.ofType(TodoActions.ADD).map(() =>
  //     getFirebase().push('/',{task:'dsa'})
  //   ))
}

