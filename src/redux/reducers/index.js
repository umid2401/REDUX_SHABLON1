import {combineReducers} from "redux";
import { myReducers,  } from "./myReducers";
export const rootReducer=combineReducers({
    store:myReducers,
});

