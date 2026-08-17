import "../css/dashboard.css";

function ResultCard() {
    return (
        <section className="result-section">
            <div className="result-header">
                <span className="section-badge">✦ Health Analysis</span>

                <h2>
                    Your Health
                    <span> Insights</span>
                </h2>

                <p>
                    Here is a simple overview based on your health and
                    lifestyle information.
                </p>
            </div>

            <div className="result-main-card">

                <div className="result-score-area">
                    <div className="result-score-circle">
                        <div>
                            <strong>82</strong>
                            <span>/100</span>
                        </div>
                    </div>

                    <div>
                        <span className="result-label">Overall Health Score</span>
                        <h3>Good</h3>
                        <p>Your lifestyle indicators look healthy.</p>
                    </div>
                </div>

                <div className="result-risk">
                    <span>Current Risk Level</span>

                    <div className="risk-level">
                        <span>●</span>
                        Low
                    </div>

                    <p>
                        No major lifestyle-related risk indicators were
                        detected in this assessment.
                    </p>
                </div>

            </div>

            <div className="result-grid">

                <div className="result-detail-card">
                    <span>⚖️</span>
                    <div>
                        <small>BMI</small>
                        <strong>23.4</strong>
                        <p>Normal range</p>
                    </div>
                </div>

                <div className="result-detail-card">
                    <span>🏃</span>
                    <div>
                        <small>Activity</small>
                        <strong>Good</strong>
                        <p>Regular activity recommended</p>
                    </div>
                </div>

                <div className="result-detail-card">
                    <span>😴</span>
                    <div>
                        <small>Sleep</small>
                        <strong>7.4 hrs</strong>
                        <p>Healthy sleep duration</p>
                    </div>
                </div>

                <div className="result-detail-card">
                    <span>🥗</span>
                    <div>
                        <small>Diet</small>
                        <strong>Balanced</strong>
                        <p>Maintain healthy nutrition</p>
                    </div>
                </div>

            </div>

            <div className="result-disclaimer">
                <span>ℹ️</span>
                <p>
                    This result is for health awareness and wellness
                    guidance only. It does not replace professional
                    medical advice or diagnosis.
                </p>
            </div>
        </section>
    );
}

export default ResultCard;