let initalState = {
  cnt: 0,
};

function reducer(state = initalState, action) {
  console.log("action", action);
  if (action.type === "INC") {
    return { ...state, cnt: state.cnt + action.payload.num };
    //return으로 값을 바꿔주거나 줌. ...state는 복사를해서 새로운객체내용을 반환하기 위해서이다.
    //cnt를넣는이유는 initealstate안의 state중에 cnt에값을 바꿀거임
  } else if (action.type === "LOGIN") {
    return {
      ...state,
      id: action.payload.id,
      password: action.payload.password,
    };
  } else if (action.type === "MO") {
    return { ...state, cnt: state.cnt - 1 };
  }
  return { ...state };
}

export default reducer;
