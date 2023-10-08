import React from "react";
import "./Card.css";

export default function Card({ input, confirm }) {
  return (
    <>
      <div className="cardcontainer">
        <div className="contents">
          <div className="circles">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <>
            {confirm ? (
              <h1>{input?.cardNumber}</h1>
            ) : (
              <h1>
                0000{"\t"}0000{"\t"}0000{"\t"}0000{" "}
              </h1>
            )}
          </>

          <>
            {confirm ? (
              <p className="namearea">{input?.name}</p>
            ) : (
              <p className="namearea">JANE APPLESEED</p>
            )}
          </>

          <div className="datearea">
            <>
              {confirm ? (
                <p className="datemonth">{input?.mm}</p>
              ) : (
                <p className="datemonth">00</p>
              )}
            </>
            <p>/</p>

            <>
              {confirm ? (
                <p className="dateyear">{input?.yy}</p>
              ) : (
                <p className="dateyear">00</p>
              )}
            </>
          </div>
        </div>
      </div>

      <div className="backcontainer">
        <div className="blackbar"></div>
        <div>
          {confirm ? (
            <p className="cvcbar">{input?.cvc}</p>
          ) : (
            <p className="cvcbar">000</p>
          )}
        </div>
        <div className="dots">
          <div className="line1">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
          </div>
          <div className="line2">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
          </div>
          <div className="line3">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
          </div>
        </div>
      </div>

    
    </>
  );
}
