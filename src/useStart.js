import React, { useEffect } from "react";
import { db } from "./firebase/firebase.utils";
import { useDispatch } from "react-redux";

import { setAllCustomers } from "./redux/customers/customers.action";

const useStart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("customers").onSnapshot((customers) => {
      let list = [];
      customers.forEach((customer) => {
        list.push(customer.data());
      });
      dispatch(setAllCustomers(list));
    });
  }, []);
};

export default useStart;
