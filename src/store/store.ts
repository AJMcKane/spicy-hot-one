import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootreducer";

export default createStore(rootReducer, applyMiddleware(thunk));