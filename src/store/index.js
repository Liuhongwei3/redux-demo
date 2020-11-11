import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import TodoSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(TodoSaga);

export default store;