import { useState } from "react";
import "./App.css";

function App() {
  let counter = 0; // Change from const to let
  const [num, setNum] = useState(0);

  const handleUpNum = () => {
    counter = counter + 1;
    setNum(num + 1);
    console.log("counter: " + counter + ", num: " + num);
  };
  //1.유저가 버튼을 클릭한다.
  //2.counter+1해서 1이됨
  //3.setState함수호출
  //4.console.log실행돔
  //변수값은 1로 보이고 state값은 아직 안변했기 떄문에 그전에 값이 보인다.
  //함수끝
  //app다시 리렌더링
  //let counter=0을 거치면 counter 값은 다시 0으로 초기화된다.
  //state값은 update가 되면서 업데이트된 state값이 보인다.
  return (
    <div>
      <button onClick={handleUpNum}>클릭</button>
      <p>num : {num}</p>
      <p>counter : {counter}</p>
    </div>
  );
}

export default App;
