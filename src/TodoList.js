import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import store from "./store";
import {ChangeInputAction,GetInitListAction, AddItemAction, DeleteItemAction} from "./store/action";
import TodoListUi from "./pages/TodoListUI";
import {message} from "antd";

class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  componentDidMount() {
    // const action = getInitList();
    store.dispatch(GetInitListAction());
  }

  changeInputValue = (e) => {
    store.dispatch(ChangeInputAction(e))
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }

  addItem = () => {
    message.info("Add item success ~")
    store.dispatch(AddItemAction())
  }

  deleteItem = index => {
    message.warn("Delete item success ~")
    store.dispatch(DeleteItemAction(index))
  }

  render() {
    return (
      <TodoListUi
          inputValue = {this.state.inputValue}
          list = {this.state.list}
          changeInputValue = {this.changeInputValue}
          addItem = {this.addItem}
          deleteItem = {this.deleteItem}
      />
    )
  };
}

export default TodoList;
