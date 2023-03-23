import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAverage = lists => {
  console.log('평균값 계산중');
  if (lists.length === 0) return 0;
  const sum = lists.reduce((a, b) => a + b); //reduce: 더해주는 함수
  return sum / lists.length;
};


function Average() {
  const [number, setNumber] = useState('');
  const [lists, setLists] = useState([]);
  const inputEl = useRef(null); //일단 어떤 값(null)도 없는 useRef를 만듬
  const buttonEl = useRef(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    setLists(lists.concat(parseInt(number))); //number의 값을 lists배열에다가 추가 parseInt사용해서 정수형태로 바꿔줌 concat:기존배열에다가 붙여준다
    setNumber("");
    inputEl.current.focus(); //useRef에 포커스를 지정해라
  }, [number, lists]);

  const avg = useMemo(() => getAverage(lists),[lists]) ; //useMemo:훅함수, lists데이터 내용이 바뀔때만 계산해라

  return (
    <div>
      <h1> 평균값 계산 </h1>
      <input value={number} onChange={onChange} ref={inputEl} /> 
      <button onClick={onInsert} ref={buttonEl}>등록</button>
      <ul>
        {lists.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
}

export default Average;
