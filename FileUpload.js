import React, { useState } from "react";
import { analyzeResume } from "../api";

export default function FileUpload({ setAnalysis }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!file) return alert("Please upload a file");

    setLoading(true);
    const result = await analyzeResume(file);
    setAnalysis(result);
    setLoading(false);
  };

  return (
    <div className="upload-box">
      <input 
        type="file" 
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button className="btn" onClick={handleAnalyze}>
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>
    </div>
  );
}
