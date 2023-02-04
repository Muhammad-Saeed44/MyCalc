import React, { useState } from "react";
export default function Textform(props) {
  const a = "0.008";
  const [text, setText] = useState("");
  const [fn, setFn] = useState("");
  const [op, setOp] = useState("");
  const [sn, setSn] = useState("");
  const [ans, setAns] = useState("");
  const change = (event) => {
    setText(event.target.value);
  };
  const loCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const upCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const clear = () => {
    let newText = "";
    setText(newText);
  };
  const clearans = () => {
    let newText = "";
    setFn(newText);
    setOp(newText);
    setSn(newText);
    setAns(newText);
  };
  const changeFn = (event) => {
    setFn(event.target.value);
  };
  const changeOp = (event) => {
    setOp(event.target.value);
  };
  const changeSn = (event) => {
    setSn(event.target.value);
  };
  const changeAns = (event) => {
    setAns(event.target.value);
  };
  const calc = () => {
    if (op === "+") {
      let nans = parseFloat(fn) + parseFloat(sn);
      setAns(nans);
    }
    if (op === "-") {
      let nans = parseFloat(fn) - parseFloat(sn);
      setAns(nans);
    }
    if (op === "*" || op === "x") {
      let nans = parseFloat(fn) * parseFloat(sn);
      setAns(nans);
    }
    if (op === "/") {
      let nans = parseFloat(fn) / parseFloat(sn);
      setAns(nans);
    }
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div className="container my-3 ">
        <div className="mb-4">
          <label
            htmlFor="exampleFormControlTextarea1"
            className={`form-label text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <h2>
              Manipulate your text {`==>`} LowerCase to UpperCase , UpperCase to
              LowerCase , Remove Extra Spaces , Calculator !!
            </h2>
          </label>
          <textarea
            style={props.abcoll}
            value={text}
            onChange={change}
            className="form-control"
            id="box1"
            rows="6"
            placeholder="Enter your text here!"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-${
            props.mode === "light" ? "primary" : "success"
          } mx-3`}
          onClick={loCase}
        >
          LowerCase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-${
            props.mode === "light" ? "primary" : "success"
          } mx-3`}
          onClick={upCase}
        >
          UpperCase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-${
            props.mode === "light" ? "primary" : "success"
          } mx-3`}
          onClick={clear}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-${
            props.mode === "light" ? "primary" : "success"
          } mx-3`}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container">
        <h2
          className={` my-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          Summary
        </h2>
        <hr className="my-3 border border-primary "></hr>
        <p
          className={` my-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          <b>Number of words=</b>{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
        </p>
        <p
          className={` my-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          <b>Number of characters=</b> {text.length}
        </p>
        <p
          className={` my-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          <b>Time to read this!=</b>{" "}
          {parseFloat(
            a *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
          )}
          <b>minutes</b>
        </p>
      </div>
      <div className="container">
        <h2
          className={` my-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          Calculator
        </h2>
        <hr className="my-3 border border-primary "></hr>
        <div className="input-group input-group-sm mb-3">
          <input
            style={props.abcoll}
            type="text"
            placeholder="Enter first number"
            id="n1"
            value={fn}
            onChange={changeFn}
          ></input>
          <input
            style={props.abcoll}
            type="text"
            id="op"
            placeholder="Enter operator"
            value={op}
            onChange={changeOp}
          ></input>
          <input
            style={props.abcoll}
            type="text"
            id="n2"
            placeholder="Enter 2nd number"
            value={sn}
            onChange={changeSn}
          ></input>

          <button
            disabled={fn === "" || op === "" || sn === ""}
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "primary" : "success"
            } mx-3`}
            onClick={calc}
          >
            Calculate
          </button>
          <button
            disabled={fn === "" || op === "" || sn === ""}
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "primary" : "success"
            } mx-3`}
            onClick={clearans}
          >
            Clear
          </button>
        </div>
        <p
          className={` text-${props.mode === "light" ? "dark" : "light"}`}
          onChange={changeAns}
        >
          <b>ANSWER: </b> {ans}
        </p>
      </div>
    </>
  );
}
