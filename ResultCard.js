import React from "react";

export default function ResultCard({ analysis }) {
  return (
    <div className="card">
      <h2>ATS Score: {analysis.score}%</h2>

      <h3>Strengths</h3>
      <ul>
        {analysis.strengths.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <h3>Weaknesses</h3>
      <ul>
        {analysis.weaknesses.map((w, i) => (
          <li key={i}>{w}</li>
        ))}
      </ul>
    </div>
  );
}
