import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const useCustomers = (customerId) => {
  const allCustomers = useSelector((state) => state.customers.allCustomers);
  if (!allCustomers) return;
  const i = allCustomers.findIndex((item) => item.id === customerId);
  return allCustomers[i];
};

export default useCustomers;
