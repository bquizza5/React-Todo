import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

import './app.css'

  const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    };

  }

  toggleTask = id => {
    console.log(id);
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  clearFinished = () => {
    
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
    console.log('cleared')
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <ToDoForm addTask={this.addTask} />
        </div>
        <ToDoList
          tasks={this.state.tasks}
          toggleTask={this.toggleTask}
          clearFinished={this.clearFinished}
        />
      </div>
    );
  }
}

export default App;