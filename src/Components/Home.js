import "../index.css";
import { useState, useContext } from "react";
import Context from "./Context";
export default function Home() {
  const upperHandler = () => {
    setInput(input.toUpperCase());
  };
  const lowerHandler = () => {
    setInput(input.toLowerCase());
  };
  const removeSpace = () => {
    const temp = input.replace(/\s+/g, " ");
    setInput(temp.trim());
  };
  const clearText = () => {
    setInput("");
  };
  const copyTetx = () => {
    navigator.clipboard.writeText(input);
    alert("Copied!!")
  };

  const [input, setInput] = useState("");

  const mode = useContext(Context)
  return (
    <>
      <div className="body-container">
        <div className="form-floating">
          <p className="h2">Enter the text to analyze below</p>
          <textarea
            className="form-control"
            placeholder="Enter the text"
            id="floatingTextarea2"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            style={{
              color: mode ? "white" : "black",
              backgroundColor: mode ? "black" : "whitesmoke",
              height:"100px"
            }}
          ></textarea>
        </div>
        <div className="button">
          <button
            type="button"
            className="btn btn-primary"
            onClick={upperHandler}
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={lowerHandler}
          >
            Convert to Lowercase
          </button>
          <button type="button" className="btn btn-primary" onClick={copyTetx}>
            Copy Text
          </button>
          <button type="button" className="btn btn-primary" onClick={clearText}>
            Clear Text
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={removeSpace}
          >
            Remove Extra Space
          </button>
        </div>
        <div className="preview">
          <p className="h3">Your text summary</p>
          <p className="fs-5">{input.split(" ").length} word and {input.length} character</p>
          <p className="fs-5">{0.008*input.split(" ").length} min read</p>
          <p className="h3">Preview</p>
          <p className="h6">Enter something in the textbox above to preview it here:</p>
          <p className="fs-5">{input}</p>
        </div>
      </div>
    </>
  );
}
