import React, { useState } from 'react'
import { MdAdd } from "react-icons/md";
import '../styles/TodoInsert.scss';

function TodoInsert({onInsert,setTodos,todos}) {
  const [value, setValue] = useState('');
  const onChange = (e) =>{
    setValue(e.target.value);
  }
  const onSubmit = (e) => {
    setValue('');
    // e.prevenDefault();
    onInsert(value);

  }
  console.log(value)
  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input placeholder='입력하세요'
      value={value}
      onChange={onChange} />
      <button type='submit'><MdAdd /></button>
    </form>
  )
}

export default TodoInsert