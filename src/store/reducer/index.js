const initState = {
  inputValue: "",
  list: []
}

//  不能直接修改 state 而且要保证为纯函数（固定的输入 -> 固定的输出 而且无副作用（不会对参数进行修改））
const reducer = (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'change_input_value':
      newState.inputValue = action.value;
      return newState;
    case 'init_list':
      newState.list = action.value;
      return newState;
    case 'add_item':
      state.inputValue && newState.list.push(state.inputValue);
      newState.inputValue = "";
      return newState;
    case 'delete_item':
      newState.list.splice(action.value,1);
      return newState;
    default:
      return state;
  }
}

export default reducer;