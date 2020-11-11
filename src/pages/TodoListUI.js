import React from 'react';
import {Button, Input, List} from "antd";

const TodoListUi = props => {
  return (
      <div style={{margin: '10px'}}>
        <Input style={{width: '500px', marginRight: "10px"}}
               allowClear placeholder="Basic usage"
               value={props.inputValue}
               onChange={props.changeInputValue}
        />
        <Button type="primary" onClick={props.addItem}>Submit</Button>
        <List
            size="large"
            style={{width: '600px', marginTop: '5px'}}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => <List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>}
        />
      </div>
  )
}

// class TodoListUi extends Component {
//   render() {
//     return ();
//   }
// }

export default TodoListUi;