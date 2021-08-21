import customersActionType from "./customers.type";

const INITIAL_STATE = {
  allCustomers: [],
};

const customersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case customersActionType.SET_ALL_CUSTOMERS: {
      return {
        ...state,
        allCustomers: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default customersReducer;
