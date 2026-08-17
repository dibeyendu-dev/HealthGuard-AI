import { Link } from "react-router-dom";
import "../css/auth.css";

function Register() {
  return (
    <main className="auth-page">
      <div className="auth-bg-circle auth-circle-one"></div>
      <div className="auth-bg-circle auth-circle-two"></div>

      <div className="auth-container">
        <div className="auth-info">
          <div className="auth-brand">
            <span>✦</span>
            HealthGuard AI
          </div>

          <h1>
            Start Your
            <span> Health Journey.</span>
          </h1>

          <p>
            Create your account and begin understanding your
            health with AI-powered insights.
          </p>

          <div className="auth-feature-list">
            <div>
              <span>❤️</span>
              <p>Understand your health better</p>
            </div>

            <div>
              <span>🤖</span>
              <p>Get personalized AI guidance</p>
            </div>

            <div>
              <span>📈</span>
              <p>Track your wellness journey</p>
            </div>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-card-heading">
            <span className="auth-small-title">Get started</span>
            <h2>Create your account</h2>
            <p>Fill in your details to get started.</p>
          </div>

          <form className="auth-form">
            <div className="input-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <span>👤</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <span>✉</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <span>🔒</span>
                <input
                  type="password"
                  placeholder="Create a password"
                />
              </div>
            </div>

            <div className="terms-check">
              <input type="checkbox" />
              <span>
                I agree to the terms and privacy policy.
              </span>
            </div>

            <button type="submit" className="auth-button">
              Create Account
              <span>→</span>
            </button>
          </form>

          <div className="auth-divider">
            <span>Already have an account?</span>
          </div>

          <Link to="/login" className="register-link">
            Login to your account
          </Link>

          <small className="auth-disclaimer">
            For health awareness and wellness guidance only.
          </small>
        </div>
      </div>
    </main>
  );
}

export default Register;