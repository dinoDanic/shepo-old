import { db } from "./firebase.utils";
import { v4 as uuidv4 } from "uuid";

// Create Functions
export const createProduct = async (
  productCode,
  productName,
  productWeight
) => {
  const productCollection = db.collection("products");
  await productCollection.add({
    id: uuidv4(),
    productCode,
    productName,
    productWeight,
    created: new Date(),
  });
};

export const createCustomer = async (customerName, customerAdress, office) => {
  const customerCollection = db.collection("customers");
  await customerCollection.add({
    name: customerName,
    address: customerAdress,
    office,
    id: uuidv4(),
  });
};

export const createOrder = async (newOrder) => {
  const orderColletctions = db.collection("orders");
  await orderColletctions.add({
    ...newOrder,
    id: uuidv4(),
  });
};
