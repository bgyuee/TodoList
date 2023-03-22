import React from 'react';
import '../styles/TodoList.scss';
import TodoListItem from './TodoListItem';


function TodoList({todos,onToggle,onRemove}) {
  return (
    <div className='TodoList'>
    {todos.map((todo)=>(
      <TodoListItem
        todo={todo}
        key={todo.id}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    ))}
    </div>
  )
}

export default TodoList