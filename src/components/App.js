import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TasksList';
import Categories from './Categories';
import Footer from './Footer';
import './App.css';

// const API = '../../data/data.json';

class App extends Component {

  // count = 0;
  deletedTasksTable = [];

  state = {
    tasks: [],
    selectedCategory: 1,
  }

  addTask = (text, date, important) => {
    // console.log('Add object');
    let count = this.state.tasks.length + this.deletedTasksTable.length;
    const task = {
      id: count,
      text,
      date,
      important,
      active: true,
      finishDate: null,
      deleted: false,
    }
    // console.log(`Add object with id: ${task.id}`);

    // this.count++;
    count++;
    // console.log(task);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task],
    }))

    return true;

  }

  deleteTask = id => {
    // console.log(`Delete element of id ${id}.`);

    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    this.deletedTasksTable.push(tasks[index]);
    this.deletedTasksTable[this.deletedTasksTable.length - 1].finishDate = new Date().getTime();
    this.deletedTasksTable[this.deletedTasksTable.length - 1].deleted = true;
    tasks.splice(index, 1);

    // console.log(`Tasks after delete ${tasks}`);

    this.setState({
      tasks,
    })

    // console.log(this.deletedTasksTable);
  }

  changeTaskStatus = id => {
    // console.log(`Change status for element with id ${id}.`);

    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }

    })
    this.setState({
      tasks,
    })
  }

  catToDo = () => {
    this.setState({
      selectedCategory: 1,
    })
  }

  catDone = () => {
    this.setState({
      selectedCategory: 2,
    })
  }

  catDel = () => {
    this.setState({
      selectedCategory: 3,
    })
  }

  catImportant = () => {
    this.setState({
      selectedCategory: 4,
    })
  }

  // componentDidMount() {
  //   fetch(API)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         tasks: data,
  //       })
  //     });
  // }

  render() {

    return (

      <div className="app">

        <section className="tasksContainer">
          <div className="category">
            <Categories
              todo={this.catToDo}
              done={this.catDone}
              del={this.catDel}
              important={this.catImportant}
            />
          </div>

          {this.state.selectedCategory === 1 ? <div className="addTask"><AddTask add={this.addTask} /></div> : null}

          <div className="taskList" style={this.state.selectedCategory === 1 ? null : { flexBasis: '89vh' }}>
            <TaskList
              tasks={this.state.tasks}
              delete={this.deleteTask}
              change={this.changeTaskStatus}
              trash={this.deletedTasksTable}
              show={this.state.selectedCategory}
            />
          </div>
          <footer className="footer">
            <Footer />
          </footer>
        </section>
      </div>
    )
  }

}

export default App;
