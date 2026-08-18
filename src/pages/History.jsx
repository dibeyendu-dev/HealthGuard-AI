import "../css/history.css";

function History() {
    return (
        <div className="history-page">
            <div className="history-header">
                <span className="section-badge">✦ Health Records</span>

                <h1>
                    Your Health <span>History</span>
                </h1>

                <p>
                    View your previous health assessments and wellness results.
                </p>
            </div>

            <div className="history-list">

                <div className="history-card">
                    <div className="history-date">
                        <strong>17</strong>
                        <span>Aug</span>
                    </div>

                    <div className="history-info">
                        <h3>Health Assessment</h3>
                        <p>Health Score: 82 • BMI: 23.4</p>
                    </div>

                    <div className="history-risk low">
                        ● Low Risk
                    </div>
                </div>

                <div className="history-card">
                    <div className="history-date">
                        <strong>10</strong>
                        <span>Aug</span>
                    </div>

                    <div className="history-info">
                        <h3>Health Assessment</h3>
                        <p>Health Score: 74 • BMI: 25.8</p>
                    </div>

                    <div className="history-risk moderate">
                        ● Moderate
                    </div>
                </div>

                <div className="history-card">
                    <div className="history-date">
                        <strong>03</strong>
                        <span>Aug</span>
                    </div>

                    <div className="history-info">
                        <h3>Health Assessment</h3>
                        <p>Health Score: 79 • BMI: 24.6</p>
                    </div>

                    <div className="history-risk low">
                        ● Low Risk
                    </div>
                </div>

            </div>
        </div>
    );
}

export default History;