const numbers = "0123456789";

const useOTPGenretor = (length) => {
  const len = length || 6;

  let OTP = "";

  for (let index = 0; index <= len; index++) {
    const num = Math.floor(Math.random() * numbers.length);
    OTP += numbers[num];
  }

  return OTP;
};

export default useOTPGenretor;
