import "./App.css";
import React, { useState } from "react";
import FormComp from "./components/Form";
import ResultComp from "./components/Result";

function App() {
  const [userChoice, setUserChoice] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  console.log(userChoice);
  return (
    <div className="App">
      <div className="container">
        {isSubmit ? (
          <ResultComp userChoice={userChoice} />
        ) : (
          <FormComp
            setIsSubmit={setIsSubmit}
            setUserChoice={setUserChoice}
            userChoice={userChoice}
          />
        )}
      </div>
    </div>
  );
}

export default App;
