import React, { Component } from 'react';
import TodoActions from './store/TodoActions'
import { connect } from 'react-redux';
class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = { taskInput: '',buttonName: "Add", buttonHandler: this.addHandler }
    }

    inputHandler = (ev) => {
        this.setState({ taskInput: ev.target.value })
    }
    addHandler = () => {
        this.props.add({ id: new Date().getTime(), task: this.state.taskInput })
        this.setState({ taskInput: '' })
    }
    updateHandler = key => {
        let index = this.props.taskArray.findIndex(element => element.id === key);
        this.setState({ buttonName: "Update", buttonHandler: () => {this.props.update(key,this.state.taskInput);this.afterUpdate()}, taskInput:   this.props.taskArray[index].task })
    
       
      }
      afterUpdate=()=>{
          this.setState({buttonName:"Add",buttonHandler:this.addHandler,taskInput:""})
      }
    
    render() {
        console.log(this.props.taskArray)
        return (

            <div>
                <input type="text" onChange={this.inputHandler} value={this.state.taskInput} />
                <input type="submit" onClick={this.state.buttonHandler} value={this.state.buttonName} />
                <ul>
                    {this.props.taskArray.map(value => {
                        return <li id={value.id} >{value.task}<button onClick={()=>this.updateHandler(value.id)} >update</button> <button onClick={(e) => this.props.delete(value.id)} >delete</button></li>
                    })}
                </ul>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        taskArray: state.todo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: (value) => dispatch(TodoActions.add(value)),
        delete: (id) => dispatch(TodoActions.delete(id)),
        update:(id,inputValue)=> dispatch(TodoActions.update(id,inputValue))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo)

