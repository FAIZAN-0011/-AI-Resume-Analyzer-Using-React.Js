import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import ResultCard from "./components/ResultCard";
import "./index.css";

function App() {
  const [analysis, setAnalysis] = useState(null);

  return (
    <div className="container">
      <h1 className="title">AI Resume Analyzer</h1>
      <FileUpload setAnalysis={setAnalysis} />
      {analysis && <ResultCard analysis={analysis} />}
    </div>
  );
}

export default App;
