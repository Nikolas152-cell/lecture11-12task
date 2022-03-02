import {createStore, combineReducers, applyMiddleware} from "redux";
import {customerReducer} from "./customerReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
        customers: customerReducer,
    }
)

export const store = createStore(rootReducer, applyMiddleware(thunk));
