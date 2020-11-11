import { put, takeEvery } from 'redux-saga/effects'
import axios from "axios";
import {InitListAction} from "./action";

function *initList() {
  try{
    const res = yield axios.get("http://localhost:3001/todoList");
    const action = InitListAction(res.data);
    yield put(action);
  }catch (e) {
    console.log("访问初始化列表数据失败！")
  }
}

function *mySaga() {
  yield takeEvery("get_init_list",initList);
}

export default mySaga;