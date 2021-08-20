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
  });
};
