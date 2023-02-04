import React from "react";
import { Link } from "react-router-dom";

export default function About(props) {
  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {props.aboutTex}
        </h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                style={props.abcol}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                MyCalc Introduction
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={props.abcoll}>
                <strong>
                  MyCalc is a web based Application developed by Muhammad Saeed
                  in 2022.This Application helps the user to manipulate their
                  Text. User can paste their text here to convert it to Upper
                  case or to Lower case.User can also remove extra spaces from
                  their text.with that user can make calculations by giving 2
                  numbers and operator like +,- etc. <hr></hr>
                  User can enable dark mode / light mode according to their
                  choice.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={props.abcol}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Contact
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={props.abcoll}>
                <address>
                  MyCalc pvt ltd. <br></br>
                  VIP Ghori Town, Islamabad. 55000<br></br>
                  contact no: (+92) 03423154012 <br></br> Email:
                  saeedgondal.a@gmail.com
                </address>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={props.abcol}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Founder
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={props.abcoll}>
                <div
                  className="card"
                  style={
                    props.abcoll
                  }
                >
                  <img src="..." className="card-img-top" />
                  <div className="card-body" style={props.abcoll}>
                    <h5 style={props.abcoll} className="card-title">
                      Founder : Muhammad Saeed
                    </h5>
                    <p style={props.abcoll} className="card-text">
                    Software Engineer Muhammad Saeed Gondal is a founder of MyCalc pvt ltd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
