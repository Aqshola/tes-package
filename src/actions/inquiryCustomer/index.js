import serviceCustomer from "../../services/serviceCustomer";

const inquiryCustomer = async () => {
  const data = await serviceCustomer();
  return data;
};

module.exports = inquiryCustomer;
