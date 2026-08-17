import { Link } from "react-router-dom";
import "../css/dashboard.css";

function RecentAnalysis() {
    return (
        <section className="recent-analysis">
            <div className="recent-header">
                <div>
                    <span className="section-badge">✦ Health History</span>
                    <h2>Recent <span>Analysis</span></h2>
                </div>

                <Link to="/history" className="view-history-btn">
                    View History →
                </Link>
            </div>

            <div className="analysis-list">

                <div className="analysis-item">
                    <div className="analysis-icon">❤️</div>
                    <div className="analysis-info">
                        <h3>Health Assessment</h3>
                        <p>17 August 2026</p>
                    </div>
                    <div className="analysis-result low">
                        <span>●</span>
                        Low Risk
                    </div>
                </div>

                <div className="analysis-item">
                    <div className="analysis-icon">📊</div>
                    <div className="analysis-info">
                        <h3>Health Assessment</h3>
                        <p>10 August 2026</p>
                    </div>
                    <div className="analysis-result moderate">
                        <span>●</span>
                        Moderate
                    </div>
                </div>

                <div className="analysis-item">
                    <div className="analysis-icon">✨</div>
                    <div className="analysis-info">
                        <h3>Health Assessment</h3>
                        <p>03 August 2026</p>
                    </div>
                    <div className="analysis-result low">
                        <span>●</span>
                        Low Risk
                    </div>
                </div>

            </div>
        </section>
    );
}

export default RecentAnalysis;