import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box";
import { useState } from "react";
//1.박스두개 (타이틀,이미지,결과값(이기고지는거)
//2.이모지 3개 (가위바위보),
//3. 버튼을 클릭하면 클릭한값이 박스에보임
//4.컴퓨터는 랜덤하게 아이템 선택이 됨
//5. 3,4번의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패결과에 따라 테두리 색이 바뀐다. (이기면- 초록 ,지면 - 빨강 , 비기면 -검은색)
const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzuafzcAyY02lAozyrGy8aCMLJGFPfSPzfA&usqp=CAU",
  },
  scissors: {
    name: "Scissors",
    img: "data:image/png;base64,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",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMk8Xu4sTGvW9cusnk9SQMYSfQv_yO7DXHzQ&usqp=CAU",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  // const [computerResult, setComputerResult] = useState("");
  const play = (userChoice) => {
    // userSelect = choice[userChoice]; //choice라는 함수에서 userChoice문자열에 맞는 객체이름을 들고올수있음. 하지만 할당해주면 안되니까 setter을 써야한다.
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    // if (result == "win") {
    //   setComputerResult("lose");
    // } else if (result == "lose") {
    //   setComputerResult("win");
    // } else if (result == "tie") {
    //   setComputerResult("tie");
    // }
    // console.log(computerResult);
  };

  const judgement = (user, computer) => {
    //user == computer tie
    //user == rock , computer == scissors   user win
    //user == rock  , computer == paper    user lose
    //user == scissors computer == paper    user win
    //user == scissors computer == rock     user lose
    //user == paper computer == rock      user win
    //~~
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock") {
      return computer.name == "Scissors" ? "win" : "lose";
    } else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };
  const randomChoice = () => {
    let itemarr = Object.keys(choice); //객체의 키값만 뽑아서 배열로 만들어줌

    let randomItem = Math.floor(Math.random() * itemarr.length);
    let final = itemarr[randomItem];
    return choice[final];
  };
  return (
    <>
      <div className="main">
        <Box name="you" item={userSelect} result={result} />
        {<Box name="computer" item={computerSelect} />}
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
