import React from "react";

function Translation({ buttonName, doOptionAction, setTextAreaInput, result }) {
  console.log(result);
  return (
    <div className="translation-div-main">
      <textarea
        className="translation-text-area"
        // style={{ fontFamily: "Raleway", fontSize: "14px" }}
        rows={20}
        cols={100}
        onChange={(e) => setTextAreaInput(e.target.value)}
      ></textarea>
      <div>
        <button className="translate-btn" onClick={doOptionAction}>
          {buttonName}
        </button>
        <h3 className="result-text">
          Result: {result.length > 0 ? result : ""}
        </h3>
      </div>
    </div>
  );
}

export default Translation;
