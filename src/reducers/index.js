import { combineReducers } from "redux";

import characterReducer from "./characterReducer";
import turnReducer from "./turnReducer";

export default combineReducers({
    characters: characterReducer,
    turns: turnReducer,
});