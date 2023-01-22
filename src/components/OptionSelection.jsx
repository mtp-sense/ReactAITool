import React from "react";

function OptionSelection({ AIOptionsArray, selectOption }) {
  return (
    <>
      <h1 className="options-heading">React AI Tool</h1>
      <div className="options-grid-main">
        {AIOptionsArray.map((option) => (
          <div
            key={option.id}
            className="option-grid-child"
            onClick={() => selectOption(option.params, option.buttonName)}
          >
            <h3>{option.name}</h3>
            <p>{option.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default OptionSelection;
