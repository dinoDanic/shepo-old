import { db } from "./firebase.utils";

// Create Functions
export const createProduct = async (
  productCode,
  productName,
  productWeight
) => {
  const productCollection = db.collection("products");
  await productCollection.add({
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
  });
};
