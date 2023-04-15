import serviceAccount from "../../services/serviceAccount";

const inquiryDebit = async () => {
  const dataInquiry = await serviceAccount();
  return dataInquiry;
};

module.exports = inquiryDebit;
