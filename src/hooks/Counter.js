import { useState } from "react";

// 함수 이름을 대문자로 시작하도록 변경합니다.
function Counter() {
  // 배열 구조 분해를 사용하여 useState 값을 가져옵니다.
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>useState Hook 사용하기</h1>
      <p>
        현재 카운터 값은: <b>{value}</b> 입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>더하기</button>
      <button onClick={() => setValue(value - 1)}>빼기</button>
    </div>
  );
}

export default Counter;
