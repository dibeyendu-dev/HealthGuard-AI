import { Link } from "react-router-dom";
import HealthForm from "../components/HealthForm";
import ResultCard from "../components/ResultCard";
import AIRecommendations from "../components/AIRecommendations";
import RecentAnalysis from "../components/RecentAnalysis";
import "../css/dashboard.css";

function Dashboard() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-container">

        <section className="dashboard-welcome">
          <div>
            <span className="dashboard-greeting">Good Morning 👋</span>
            <h1>Your Health Overview</h1>
            <p>
              Keep track of your health and discover simple ways
              to improve your daily lifestyle.
            </p>
          </div>
          <a href="#health-assessment" className="analyze-button">
            Analyze My Health
            <span>→</span>
          </a>
        </section>

        <section className="health-summary-grid">

          <div className="summary-card score-card">
            <div className="summary-top">
              <span>❤️</span>
              <small>Overall Health</small>
            </div>

            <div className="dashboard-score">
              <strong>82</strong>
              <span>/100</span>
            </div>

            <p>Good health status</p>
          </div>

          <div className="summary-card risk-card">
            <div className="summary-top">
              <span>🛡️</span>
              <small>Risk Level</small>
            </div>

            <h2>Low</h2>
            <p>Your current lifestyle risk is low.</p>

            <div className="risk-bar">
              <div></div>
            </div>
          </div>

          <div className="summary-card bmi-card">
            <div className="summary-top">
              <span>⚖️</span>
              <small>BMI</small>
            </div>

            <h2>23.4</h2>
            <p>Normal range</p>

            <div className="bmi-status">Healthy</div>
          </div>

          <div className="summary-card activity-card">
            <div className="summary-top">
              <span>🏃</span>
              <small>Activity</small>
            </div>

            <h2>Good</h2>
            <p>Daily activity level</p>

            <div className="activity-dots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

        </section>

        <section className="dashboard-content-grid">

          <div className="health-overview-card">
            <div className="dashboard-section-heading">
              <div>
                <span>📊</span>
                <div>
                  <h2>Health Overview</h2>
                  <p>Your current lifestyle indicators</p>
                </div>
              </div>

              <span className="overview-status">
                Updated Today
              </span>
            </div>

            <div className="health-metrics">

              <div className="metric">
                <div className="metric-icon blue">💧</div>
                <div>
                  <small>Hydration</small>
                  <strong>2.1 L</strong>
                </div>
                <span className="metric-good">Good</span>
              </div>

              <div className="metric">
                <div className="metric-icon purple">😴</div>
                <div>
                  <small>Sleep</small>
                  <strong>7.4 hrs</strong>
                </div>
                <span className="metric-good">Good</span>
              </div>

              <div className="metric">
                <div className="metric-icon pink">❤️</div>
                <div>
                  <small>Heart Rate</small>
                  <strong>72 bpm</strong>
                </div>
                <span className="metric-good">Normal</span>
              </div>

              <div className="metric">
                <div className="metric-icon green">🥗</div>
                <div>
                  <small>Diet</small>
                  <strong>Balanced</strong>
                </div>
                <span className="metric-good">Good</span>
              </div>

            </div>
          </div>

          <div className="ai-dashboard-card">
            <div className="ai-dashboard-header">
              <div className="dashboard-ai-icon">✦</div>

              <div>
                <span>AI Health Companion</span>
                <small>Powered by Gemini AI</small>
              </div>
            </div>

            <p className="ai-dashboard-text">
              Based on your current health information, your
              lifestyle looks good. Focus on regular physical
              activity and maintaining balanced nutrition.
            </p>

            <Link to="/history" className="ai-dashboard-button">
              View Health Insights
              <span>→</span>
            </Link>
          </div>

        </section>

        <section className="dashboard-bottom">

          <div className="recent-analysis">
            <div className="dashboard-section-heading">
              <div>
                <span>🕒</span>
                <div>
                  <h2>Recent Analysis</h2>
                  <p>Your previous health checks</p>
                </div>
              </div>

              <Link to="/history">View All</Link>
            </div>

            <div className="analysis-row">
              <div>
                <span className="analysis-date">Today</span>
                <strong>Health Assessment</strong>
              </div>

              <span className="analysis-result">Low Risk</span>
            </div>

            <div className="analysis-row">
              <div>
                <span className="analysis-date">12 Aug 2026</span>
                <strong>Health Assessment</strong>
              </div>

              <span className="analysis-result">Low Risk</span>
            </div>

            <div className="analysis-row">
              <div>
                <span className="analysis-date">04 Aug 2026</span>
                <strong>Health Assessment</strong>
              </div>

              <span className="analysis-result">Moderate</span>
            </div>
          </div>

          <div className="dashboard-tip">
            <span>🌿</span>
            <h3>Today's Wellness Tip</h3>

            <p>
              Small healthy habits every day can make a big
              difference over time.
            </p>

            <div className="tip-line"></div>

            <small>
              Stay hydrated • Move regularly • Sleep well
            </small>
          </div>

        </section>

      </div>
      <HealthForm />
      <ResultCard />
      <AIRecommendations />
      <RecentAnalysis />
    </main>
  );
}

export default Dashboard;