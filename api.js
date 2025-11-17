export function analyzeResume(file) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        score: 82,
        strengths: [
          "Strong work experience section",
          "Good formatting",
          "Includes measurable achievements"
        ],
        weaknesses: [
          "Add more technical skills",
          "Improve summary section",
          "ATS keywords missing"
        ]
      });
    }, 1500);
  });
}
