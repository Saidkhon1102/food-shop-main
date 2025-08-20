import { useReducer } from "react";
import { act, createContext } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CART":
      return { ...state, yourCart: [...state.yourCart, payload] };
    case "REMOVE__CART":
      return {
        ...state,
        yourCart: state.yourCart.filter((item) => item.id !== payload),
      };
    case "DECREMENT_AMOUNT":
      return {
        ...state,
        yourCart: state.yourCart.map((item) => {
          if (item.id == payload) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        }),
      };
    case "INCREMENT_AMOUNT":
      return {
        ...state,
        yourCart: state.yourCart.map((item) => {
          if (item.id == payload) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        }),
      };
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {
    yourCart: [],
    totalAmount: 0,
    totalPrice: 0,
  });
  console.log(state);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
