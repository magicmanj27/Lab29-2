import React, { Component } from "react";
import TodoItem from "./TodoItem.js";
// import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo, idx) => (
      <TodoItem
        key={idx}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// console.log(Todos.myCount());

// Todos.prototype = {
//   todos: PropTypes.array.isRequired
// }

export default Todos;
