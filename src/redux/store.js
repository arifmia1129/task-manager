import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";
import taskReducer from "./reducer/taskReducer";


const store = createStore(taskReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;