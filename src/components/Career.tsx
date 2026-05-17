import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Smarted Innovations</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            Analyzed and processed 10K+ large-scale system log events using Python and statistical techniques to identify hidden anomaly patterns, design targeted edge-case test scenarios, and improve debugging efficiency, contributing to a 28% reduction in recurring system-level bugs and a 45% increase in test coverage.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/LLM Trainer</h4>
                <h5>Outlier AI</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            Designed and evaluated high-quality prompts, datasets, and automated evaluation workflows for large language models, leveraging Python-based testing and analytical reasoning to identify failure patterns, improve response consistency, and increase large-scale output evaluation efficiency by over 20%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
