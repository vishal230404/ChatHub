import CryptoJS from 'crypto-js';

// IMPORTANT: In a real app, this key should be securely exchanged between users,
// not hardcoded. This is a simplified example.
const SECRET_KEY = 'your-super-secret-key-for-talksy';

/**
 * Encrypts a message using AES.
 * @param {string} text - The message to encrypt.
 * @returns {string} - The encrypted ciphertext.
 */
export const encryptMessage = (text) => {
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
};

/**
 * Decrypts a message using AES.
 * @param {string} ciphertext - The encrypted message to decrypt.
 * @returns {string} - The original, decrypted message.
 */
export const decryptMessage = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};