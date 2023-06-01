export const checkError = async (name, cardNumber, month, year, cvc) => {
  return new Promise((resolve, reject) => {
    let error = {};
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;

    if (!name) {
      error.name = "Can't be blank";
    }
    if (!cardNumber) {
      error.cardNumber = "Can't be blank";
    } else if (cardNumber.length !== 19 || !onlyNumbers(cardNumber)) {
      error.cardNumber = "Wrong format, numbers only";
    }

    if (!month) {
      error.month = "Can't be blank";
    } else if (
      (year === currentYear && month < currentMonth) ||
      month < 1 ||
      month > 12
    ) {
      error.month = "Wrong month!";
    }
    if (!year) {
      error.year = "Can't be blank";
    } else if (year && year < currentYear) {
      error.year = "Wrong year!";
    }

    if (!cvc) {
      error.cvc = "Can't be blank";
    } else if (!onlyNumbers(cvc)) {
      error.cvc = "Wrong format, numbers only";
    }

    // Simulating an asynchronous operation with a setTimeout
    setTimeout(() => {
      if (Object.keys(error).length === 0) {
        resolve(error);
      } else {
        resolve(error);
      }
    }, 10); // Adjust the timeout duration as needed
  });
};

export const isObjEmpty = (obj) => {
  return Object.entries(obj).length === 0;
};

function onlyNumbers(str) {
  return /^[0-9 ]*$/.test(str);
}
