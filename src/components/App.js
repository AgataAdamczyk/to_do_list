import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {

  counter = 6;
  state = {
    tasks: [
      {
        id: 0,
        text: 'Kupić ksiąkę',
        date: '2019-10-17',
        important: true,
        active: true,
        finishDate: null,
      },
      { id: 1, text: 'Wystawić sukienkę na Allegro', date: '2019-11-05', important: false, active: true, finishDate: null },
      { id: 2, text: 'Odrobić lekcje z matematyki', date: '2019-10-18', important: false, active: false, finishDate: null },
      { id: 3, text: 'Dokończyć aplikację w React', date: '2019-10-25', important: true, active: true, finishDate: null },
      { id: 4, text: 'Obejrzeć film', date: '2020-10-17', important: false, active: true, finishDate: null },
      { id: 5, text: 'Zadzwonić do Iwony', date: '2019-10-20', important: false, active: true, finishDate: null },
    ]
  }

  deleteTask = (id) => {

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text, //from input
      date,
      important,
      active: true,
      finishDate: null,
    }
    this.counter ++

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

    return true
  }

  render() {
    return (
      <div className="App">
        <h1>MOJE ZADANIA</h1>
        < AddTask add={this.addTask}/>
        < TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    )
  }
}

export default App;
