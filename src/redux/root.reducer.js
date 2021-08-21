import { combineReducers } from "redux";
import customersReducer from "./customers/customers.reducer";

const rootReducer = combineReducers({
  customers: customersReducer,
});

export default rootReducer;
