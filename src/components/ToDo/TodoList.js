import React from 'react';
import { connect } from 'react-redux';
import { Icon } from "@blueprintjs/core";

import TodoListItem from './TodoListItem';


const TodoList = ({ todos }) => {
    return (
      <ul className="mt-4">
        {todos.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo} />;
        })}
      </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);