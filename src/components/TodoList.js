import React from 'react'
import TodoListItem from './TodoListItem';
import '../styles/TodoList.scss';

function TodoList({todos}) {
  console.log(todos);
  return (
    <div className='TodoList'>
      {todos.map((todo) => (
        <TodoListItem 
          todo={todo}
          key={todo.id}
          text={todo.text}
          checked={todo.checked}
        />
      ))}
    </div>
  )
}

export default TodoList;