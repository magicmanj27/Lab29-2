import React, { Component } from "react";

import "./TodoItem.css";

export class TodoItem extends Component {
  getStyle() {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  }

  render() {
    const { id, todo, name, difficulty, startDates } = this.props.todo;
    console.log("this is from todoitems", id);
    return (
      <div style={this.getStyle()}>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          <span>{todo}</span>
          <span>{name}</span>
          <span>{startDates}</span>
          <span>{difficulty}</span>
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyles}>
            x
          </button>
        </p>
      </div>
    );
  }
}

const btnStyles = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
