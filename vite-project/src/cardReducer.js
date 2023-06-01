export const INIT_STATE = {
  name: "",
  cardNumber: "",
  month: "",
  year: "",
  cvc: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "CARD_NUMBER":
      return {
        ...state,
        cardNumber: action.payload,
      };
    case "MONTH":
      return {
        ...state,
        month: action.payload,
      };
    case "YEAR":
      return {
        ...state,
        year: action.payload,
      };
    case "CVC":
      return {
        ...state,
        cvc: action.payload,
      };
    case "RESET":
      return {
        name: "",
        cardNumber: "",
        month: "",
        year: "",
        cvc: "",
      };
  }
};
