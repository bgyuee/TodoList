import React, { useCallback, useState } from 'react';
import { MdAdd } from "react-icons/md";
import '../styles/TodoInsert.scss';


function TodoInsert({onInsert}) {

  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value); //input에 value값을 위체 지정이된 value값에 저장해줘라
  },[]);
  const onSubmit = useCallback(e => {
    setValue('');
    e.preventDefault();
    // submit이벤트는 브라우저에서 새로고침을 발생시킨다
    onInsert(value); //app컴퍼넌트로 vlaue값을 넣어서 전달해주자
  },[value]);
  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input placeholder='할일을 입력하세요' 
      value={value} 
      onChange={onChange} /> 
      <button type='submit'><MdAdd /></button>
    </form>
  )
}

export default TodoInsert