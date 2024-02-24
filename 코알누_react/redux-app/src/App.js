import "./App.css";
import { useState } from "react";
//카운팅함수를 리덕스로 구현해보자!
import { useDispatch, useSelector } from "react-redux";
import Box from "./components/Box";

function App() {
  const cnt = useSelector((state) => state.cnt);
  let id = useSelector((state) => state.id);

  let password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const handleCounter = () => {
    dispatch({ type: "INC", payload: { num: 5 } }); //payload옵셔널 필요한정보를 보내줄수있음.
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "he", password: "we" } });
  };
  const handleM = () => {
    dispatch({ type: "MO" });
  };
  return (
    <div>
      <p>{cnt}</p>
      <h1>
        {id},{password}
      </h1>
      <button onClick={handleCounter}>5씩 증가</button>
      <button onClick={handleM}>감소</button>
      <button onClick={login}> 로그인</button>
      <Box />
    </div>
  );
}

export default App;
