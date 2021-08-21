import customersActionType from "./customers.type";

export const setAllCustomers = (customersData) => ({
  type: customersActionType.SET_ALL_CUSTOMERS,
  payload: customersData,
});
