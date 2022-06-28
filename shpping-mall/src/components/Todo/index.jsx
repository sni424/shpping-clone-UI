import { useEffect } from 'react';
import { useState } from 'react';
import * as S from './style';

const TodoList = () => {
  const [todoArray, setTodoArray] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  const [todoLocalArray, setTodoLocalArray] = useState('');

  const DeleteArray = (e) => {
    setTodoArray(todoArray.filter((a) => a !== todoArray[e.target.id]));
  };

  const saveLocal = () => {
    window.localStorage.setItem('TodoList', JSON.stringify(todoArray));
    setTodoLocalArray(JSON.parse(window.localStorage.TodoList));
  };

  useEffect(() => {
    saveLocal();
    console.log(todoLocalArray);
  }, [todoArray, window.localStorage.TodoList]);

  return (
    <S.Container>
      <h1>TodoList</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodoArray([...todoArray, todoValue]);
          setTodoValue('');
        }}
      >
        <input
          type="text"
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
        />
      </form>
      <div>
        {todoArray.length > 0 &&
          todoArray.map((data, i) => {
            return (
              <S.FelxDiv>
                <h1 key={i}>{data}</h1>
                <h1 id={i} onClick={DeleteArray}>
                  x
                </h1>
              </S.FelxDiv>
            );
          })}
      </div>
    </S.Container>
  );
};

export default TodoList;
