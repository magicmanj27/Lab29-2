import React from 'react';

function Summary (props) {
  
  return (

    <h2>The are <span>{props.todos.filter(todo => !todo.completed).length}</span> items to complete</h2>
  )


}

export default Summary;
