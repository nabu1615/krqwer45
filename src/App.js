import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      newTask: '',
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li className={task.done ? 'done' : ''} onClick={this.completed.bind(this, task.id)} key={task.id}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.createTask.bind(this)}>
            <input type="text" id="new-task" onChange={this.updateValue.bind(this)} placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} />
          </form>
        </div>
      </div>
    )
  }

  completed(id, e) {
    let newArray = [];
    this.state.tasks.map(function(task, index){
      if (index === id - 1) {
        if (task.done === true) {
          task.done = false;
        } else {
          task.done = true;
        }
      }
      return newArray[index] = {id: task.id, name: task.name, done: task.done}
    })
    this.setState({
      tasks: newArray
    })
  }

  updateValue(e) {
    this.setState({
      newTask: e.target.value
    })
  }

  createTask(e) {
    e.preventDefault();
    let newTask = {id: this.state.tasks.length + 1, name: this.state.newTask, done: false};
    this.setState({
      tasks: this.state.tasks.concat(newTask),
      newTask: ''
    })
  }
}

export default App;
