//1. UI 만들고
//2.입력한 내용 추가하기
//3. state에 추가한 내용 리스트에 뿌리기
import React from 'react';
import './App.css';

function App() {
  const [todo_list, setTodoList] = React.useState([]);
  const content_ref = React.useRef(null);

  // 받아온 데이터를 리스트에 추가해주는 함수
  const addTodo = () => {
    const todo_data = {
      content: content_ref.current.value,
    };

    console.log(todo_data);

    //state에 저장하기
    setTodoList([...todo_list, todo_data ]);

  content_ref.current.value = "";
  }
  return (
    <div className="App">
      <div className='todo-input'
      style={{
        display: "flex",
        margin: "1rem",
        justifyContent: "center"
      }}>
        <input ref={content_ref} />
        <button onClick={addTodo}>추가하기</button>
      </div>
      <h1>Todo list</h1>
      <div className='todo-list' style={{
          display: "flex",
      }}>
        {todo_list.map((todo, idx) => {
          return (
            <div
            className='todo-item'
            key={idx}
            style={{
              border: "1px solid green",
              borderRadius: "10px",
              padding: "2rem",
              margin: "1rem",
            }}>
              <p>{todo.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
