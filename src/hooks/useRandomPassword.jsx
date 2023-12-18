// const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?"; // Define the character set
const charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&_?";

export const useRandomPassword = () => {
  const length = 8; // Set the desired password length
  // const newPassword = Array.from({ length }, () => {
  //   const randomIndex = Math.floor(Math.random() * charset.length);
  //   return charset[randomIndex];
  // }).join("");
  let newPassword = "";
  for (let index = 0; index < length; index++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    newPassword += charset[randomIndex];
  }
  return newPassword;
};
