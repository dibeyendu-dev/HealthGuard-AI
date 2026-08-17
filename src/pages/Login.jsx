import { Link } from "react-router-dom";
import "../css/auth.css";

function Login() {
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
            Welcome
            <span> Back!</span>
          </h1>

          <p>
            Continue your journey towards smarter health awareness
            and better lifestyle habits.
          </p>

          <div className="auth-feature-list">
            <div>
              <span>🧠</span>
              <p>AI-powered health insights</p>
            </div>

            <div>
              <span>📊</span>
              <p>Track your health progress</p>
            </div>

            <div>
              <span>🔒</span>
              <p>Secure and private experience</p>
            </div>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-card-heading">
            <span className="auth-small-title">Welcome back</span>
            <h2>Login to your account</h2>
            <p>Enter your details to continue.</p>
          </div>

          <form className="auth-form">
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
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="form-options">
              <label className="remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <a href="#forgot">Forgot password?</a>
            </div>

            <button type="submit" className="auth-button">
              Login
              <span>→</span>
            </button>
          </form>

          <div className="auth-divider">
            <span>New to HealthGuard AI?</span>
          </div>

          <Link to="/register" className="register-link">
            Create an account
          </Link>

          <small className="auth-disclaimer">
            For health awareness and wellness guidance only.
          </small>
        </div>
      </div>
    </main>
  );
}

export default Login;