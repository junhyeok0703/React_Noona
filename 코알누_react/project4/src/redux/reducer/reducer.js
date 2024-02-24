let initialState = {
  contactList: [],
};
function reducer(state = initialState, action) {
  const { payload, type } = action;
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, phoneNum: payload.phoneNum },
        ],
      };
    default:
      return { ...state };
  }
}

export default reducer;
