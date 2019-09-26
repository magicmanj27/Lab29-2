import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layouts/Header.js";
import Todos from "./components/Todos.js";
import AddTodo from "./components/AddTodo.js";
import About from "./components/pages/about.js";
import Summary from "./components/todoSummary.js";
import uuid from "uuid";

import "./styles.css";
import Axios from "axios";

class App extends Component {
  state = {
    todos: []
  };
  componentDidMount() {
    Axios.get("http://localhost:5000/api/v1/todos").then(res =>
      // console.log(res.data)

      this.setState({ todos: res.data.data.todos })
    );
  }

  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        console.log(todo._id)
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = formData => {
    let todo = formData.title;
    let name = formData.name;
    let difficulty = formData.difficulty;
    let startDates = formData.startDates;
    const newTodo = {
      id: uuid.v4(),
      todo,
      name,
      difficulty,
      startDates,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                  <Summary todos={this.state.todos} />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
