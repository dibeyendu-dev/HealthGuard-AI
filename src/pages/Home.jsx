import { Link } from "react-router-dom";
import "../css/home.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-circle circle-one"></div>
      <div className="hero-bg-circle circle-two"></div>
      <div className="hero-bg-circle circle-three"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✦</span>
            AI-Powered Health Companion
          </div>

          <h1>
            Your Health,
            <span> Smarter & Simpler.</span>
          </h1>

          <p>
            Understand your health, assess lifestyle risks, and get
            personalized wellness guidance with the power of AI.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="hero-primary-btn">
              Get Started
              <span>→</span>
            </Link>

            <a href="#features" className="hero-secondary-btn">
              Explore Features
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-icon">🧠</span>
              <div>
                <strong>AI Powered</strong>
                <small>Smart Insights</small>
              </div>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <span className="trust-icon">🛡️</span>
              <div>
                <strong>Private</strong>
                <small>Your Data Matters</small>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="health-card">
            <div className="card-glow"></div>

            <div className="health-card-header">
              <div>
                <span>Health Overview</span>
                <h3>Good Morning 👋</h3>
              </div>

              <div className="heart-icon">♡</div>
            </div>

            <div className="health-score">
              <div className="score-circle">
                <div>
                  <strong>82</strong>
                  <span>/100</span>
                </div>
              </div>

              <div className="score-info">
                <span>Overall Health</span>
                <strong>Good</strong>
                <small>Keep going!</small>
              </div>
            </div>

            <div className="mini-stats">
              <div className="mini-stat">
                <span className="stat-icon blue">⚖</span>
                <div>
                  <small>BMI</small>
                  <strong>23.4</strong>
                </div>
              </div>

              <div className="mini-stat">
                <span className="stat-icon purple">♥</span>
                <div>
                  <small>Heart Risk</small>
                  <strong>Low</strong>
                </div>
              </div>

              <div className="mini-stat">
                <span className="stat-icon pink">◉</span>
                <div>
                  <small>Activity</small>
                  <strong>Good</strong>
                </div>
              </div>
            </div>

            <div className="ai-message">
              <div className="ai-avatar">✦</div>
              <div>
                <strong>AI Health Tip</strong>
                <p>Stay active and keep yourself hydrated today.</p>
              </div>
            </div>
          </div>

          <div className="floating-card floating-card-one">
            <span>💧</span>
            <div>
              <small>Hydration</small>
              <strong>2.1 L</strong>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span>🌿</span>
            <div>
              <small>Wellness</small>
              <strong>Excellent</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;