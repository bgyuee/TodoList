import React, { useCallback, useEffect, useState } from 'react'

function Info() {
  const [name,setName] = useState('');
  const [nickname, setNickname] = useState('')

  const onChangeName = useCallback(e => {
    setName(e.target.value); //내가 텍스트입력하는 input에 vlaue값을 name값으로 지정해준다
  }, []);

  const onChangeNickname = useCallback(e => {
    setNickname(e.target.value)
  }, []);
  
  useEffect(() => {
    console.log("랜더링이 완료되었습니다 componentDidMount()");
    console.log({name,nickname});
  },[name,nickname]);//componentDidUpdate [] state값이 들어가면 state값이 바뀔때마다 useEffect함수가 실행된다

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div><b>이름:</b> {name} </div>
        <div><b>닉네임:</b> {nickname} </div>
      </div>
    </div>
  )
}

export default Info