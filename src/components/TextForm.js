import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase(text);
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase(text);
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const [text, setText] = useState("Enter Text here");
  return (
    <>
      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myText"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#13466e",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>
          Clear text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text Summary:</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
