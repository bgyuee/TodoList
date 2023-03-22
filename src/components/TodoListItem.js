import classNames from 'classnames';
import React from 'react'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdRemoveCircleOutline } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import '../styles/TodoListItem.scss'

function TodoListItem({todo,onToggle,onRemove}) {
  const {id, text, checked} = todo;
  return (
    <div className='TodoListItem'>
      <div className={classNames('Checkbox',{checked:checked})} onClick={()=>onToggle(id)}>
          {checked ?<MdCheckBox />:<MdCheckBoxOutlineBlank />}
          <div className='text'>{text}</div>
        </div>
      <div className='remove' onClick={() => onRemove(id)}><MdRemoveCircleOutline /></div>
    </div>
  )
}

export default TodoListItem