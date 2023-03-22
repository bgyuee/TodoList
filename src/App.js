import { useCallback, useRef, useState } from 'react';
import Info from './hooks/Info';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '운동하기',
      checked: true,
    },
    {
      id: 2,
      text: '요리하기',
      checked: true,
    },
    {
      id: 3,
      text: '학원가기',
      checked: false,
    }
  ]);

  const nextId = useRef(4);//ref를 사용해서 변수 담기(훅함수)

  const onInsert = useCallback(value => { //todo객체 생성

    // 입력 내용이 비어 있으면 추가하지 않음
    if (value.trim() === '') {
      return;
    }
    
    //들어옴
    const todo={
      id: nextId.current, //current를 사용하면 현재값을 가져올수 있다.
      text: value,
      checked: false,
    }
    setTodos(todos.concat(todo)); //concat: todos의 맨뒤에 todo값 넣어준다
    nextId.current +=1; //++
  },[todos]) //빈배열이 있으면 함수가 한번만 실행/ todos를 넣어주면 특정한배열값이 바뀌었을대만 기존에 생성한 함수를 재사용해서 실행한다

  const onToggle = useCallback(id => {
    setTodos(todos.map(todo => 
                        todo.id === id ? {...todo,checked: !todo.checked} : todo)) /// ... : 스프레드 연산자 기존에 있는 todo객체의 속성을 그대로 가져온다\
                        // ...todo기존의 값을 그대로 가져오고 checked만 !todo.checked해라(반대로)
  },[todos])

  const onRemove = useCallback(id => {
    setTodos(todos.filter((todo) => todo.id !== id)); //TodoListItem에서 클릭한 id값과 다른 id만 걸러서 setTodos에 저장해라, 각각에 todo에서 id값을 들고와서 비교
  },[todos])

  // 마지막으로 위에서 데이터를 가공하고 밑에서 처럼 가공한 데이터를 프랍스형태로 전달해줌
  return (
    <>
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} /> 
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
    <Info />
    </>
  );
}

export default App;
