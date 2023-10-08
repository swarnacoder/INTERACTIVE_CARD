import React, { useState } from "react";
import "./Form.css";
export default function Form({ input, setInput, setConfirm }) {
  const [submit, setSubmit] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    
    if (!input.name) {
      validationErrors.name = "INVALID CARDHOLDER NAME";
    }

    if (input.cardNumber.length !== 16) {
      validationErrors.cardNumber = "INVALID CARD NUMBER";
    }

    if (input.yy.length !== 2 || input.yy >= 31 || input.yy <=22) {
      validationErrors.yy = "INVALID YEAR";
    }

    if (input.mm.length !== 2 || input.mm >= 13) {
      validationErrors.mm = "INVALID MONTH";
    }

    if (input.cvc.length !== 3) {
      validationErrors.cvc = "INVALID CVC";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmit("CONFIRMED")

      setConfirm(true);
    };
  }

  return (
    <>
      <div className="container">
        <div className="leftside"></div>
        <div className="rightside">
          <div className="details">
            <form>
              <div className="grid_1">
                <label htmlFor="card_name"> CARDHOLDER NAME </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={input.name}
                  placeholder="e.g. Jane Appleseed"
                  id="card_name"
                  required
                />
              </div>
              {errors.name && <span>{errors.name}</span>}
              <div className="grid_2">
                <label htmlFor="card_number"> CARD NUMBER </label>
                <input
                  type="number"
                  placeholder="e.g. 1234 5678 9123 0000"
                  name="cardNumber"
                  onChange={handleChange}
                  value={input.cardNumber}
                  id="card_number"
                  required
                />
              </div>
              {errors.cardNumber && <span> {errors.cardNumber}</span>}
              <div className="card_information">
                <div id="card_date">
                  <label htmlFor="card_date"> EXP. DATE (MM/YY) </label>
                  <div className="two_inp">
                    <div>
                      <input
                        type="number"
                        placeholder="MM"
                        name="mm"
                        onChange={handleChange}
                        value={input.mm}
                        id="card_month"
                        required
                      />
                    </div>
                    {errors.mm &&
                     <span className="red"> {errors.mm}</span>}
                    <div>
                      <input
                        type="number"
                        placeholder="YY"
                        name="yy"
                        onChange={handleChange}
                        value={input.yy}
                        id="card_year"
                        required
                      />
                    </div>
                    {errors.yy && <span className="red">{errors.yy}</span>}
                  </div>
                </div>
                <div className="grid_4">
                  <label htmlFor="card_cvc"> CVC </label>
                  <input
                    type="number"
                    name="cvc"
                    placeholder="e.g. 123"
                    id="card_cvc"
                    onChange={handleChange}
                    value={input.cvc}
                    required
                  />
                </div>
                {errors.cvc && <span className="redcvc">{errors.cvc}</span>}
              </div>


              <span>{submit}</span>
              <button
                id="submit_btn"
                type="submit"
                onClick={handleSubmit}>
              Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
