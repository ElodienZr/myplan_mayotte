import CryptoJS from "crypto-js";

const secretKey = process.env.ENCRYPTION_KEY;

export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
};

export const decryptData = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
