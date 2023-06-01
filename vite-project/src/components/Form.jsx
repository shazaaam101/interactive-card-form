import React, { useContext, useEffect, useRef, useState } from "react";
import { checkError, isObjEmpty } from "../checkError";
import { CardContext } from "../CardContext";
import Thank from "./Thank";
const Form = () => {
  const { state, dispatch } = useContext(CardContext);
  const [error, setError] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  console.log(error);
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const _error = await checkError(
        state.name,
        state.cardNumber,
        state.month,
        state.year,
        state.cvc
      );
      setError(_error);
      console.log(_error);
      console.log(isObjEmpty(_error));
      if (isObjEmpty(_error)) {
        console.log("HRK");
        setIsComplete(true);
      } else {
        console.log("ASSA");
        setIsComplete(false);
      }
    } catch (error) {
      console.log("Error occurred while checking errors:", error);
      setIsComplete(false);
    }
  };

  if (isComplete) return <Thank setIsComplete={setIsComplete} />;
  return (
    <form className="Form" onSubmit={handleSubmitForm}>
      <div className="container">
        <div className="input-field">
          <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
          <br />
          <input
            className={error.name && "error"}
            id="cardholder-name"
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={(e) =>
              dispatch({ type: "NAME", payload: e.target.value })
            }
          />
          {error.name && <p className="error-text">{error?.name}</p>}
        </div>
        <div className="input-field">
          <label htmlFor="card-number">CARD NUMBER</label>
          <br />
          <input
            className={error.cardNumber && "error"}
            id="card-number"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={(e) =>
              dispatch({ type: "CARD_NUMBER", payload: e.target.value })
            }
          />
          {error.cardNumber && (
            <p className="error-text">{error?.cardNumber}</p>
          )}
        </div>

        <div className="input-field inline">
          <div className="input-field two-input">
            <label htmlFor="exp-date">EXP. DATE &#40;MM/YY&#41;</label>
            <br />
            <input
              className={error.month && "error"}
              id="exp-date"
              type="number"
              placeholder="MM"
              onChange={(e) =>
                dispatch({ type: "MONTH", payload: e.target.value })
              }
            />
            <input
              className={error.year && "error"}
              id="exp-date-yy"
              type="number"
              placeholder="YY"
              onChange={(e) =>
                dispatch({ type: "YEAR", payload: e.target.value })
              }
            />
            {(error.month || error.year) && (
              <p className="error-text">{error?.month || error?.year}</p>
            )}
          </div>

          <div className="input-field shrink">
            <label htmlFor="cvc">CVC</label>
            <input
              className={error.cvc && "error"}
              id="cvc"
              type="text"
              placeholder="e.g. 123"
              onChange={(e) =>
                dispatch({ type: "CVC", payload: e.target.value })
              }
              maxLength="3"
            />
            {error.cvc && <p className="error-text">{error?.cvc}</p>}
          </div>
        </div>

        <button className="submit-btn" type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Form;
