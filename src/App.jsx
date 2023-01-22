import { useState } from "react";
import { AIOptionsArray } from "./AIOptions";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";

function App() {
  const [selectedOptionParams, setSelectedOptionParams] = useState({});
  const [buttonName, setButtonName] = useState("");
  const [textAreaInput, setTextAreaInput] = useState("");
  const [result, setResult] = useState("");
  //OpenAI details -
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  //Now we would pass a callback method/function 'selectOption' to the child component - OptionSelection so that parameters of the selected option are passed up to the parent compoent i.e. App component.
  const selectOption = (params, buttonName) => {
    setSelectedOptionParams(params);
    setButtonName(buttonName);
  };
  const doOptionAction = async () => {
    let selectedOption = { ...selectedOptionParams, prompt: textAreaInput };
    console.log(selectedOption);
    const response = await openai.createCompletion(selectedOption);
    setResult(response.data.choices[0].text);
  };
  //console.log(selectedOptionParams);

  return (
    <div className="App">
      {/* Show the Translation component only when an option is selected by the user, else show the OptionSelection component to the user.*/}

      {Object.values(selectedOptionParams).length === 0 ? (
        <OptionSelection
          AIOptionsArray={AIOptionsArray}
          selectOption={selectOption}
        />
      ) : (
        <Translation
          buttonName={buttonName}
          doOptionAction={doOptionAction}
          setTextAreaInput={setTextAreaInput}
          result={result}
        />
      )}
    </div>
  );
}

export default App;
