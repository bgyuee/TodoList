import classNames from 'classnames';
import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import '../styles/TodoListItem.scss'

function TodoListItem({todo}) {
  const {key, text, checked} = todo;

  return (
    <div className='TodoListItem'>
      <div className={classNames('Checkbox',{checked})}>
        {checked ?<MdCheckBox />:<MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </div>
      <div className='remove'><MdRemoveCircleOutline/></div>
    </div>
  )
}

export default TodoListItem