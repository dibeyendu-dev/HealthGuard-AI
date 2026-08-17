import { Link } from "react-router-dom";
import "../css/home.css";

function FinalCTA() {
    return (
        <section className="cta-section">
            <div className="cta-glow cta-glow-one"></div>
            <div className="cta-glow cta-glow-two"></div>

            <div className="cta-container">
                <div className="cta-icon">✦</div>

                <span className="cta-badge">
                    Start Your Health Journey
                </span>

                <h2>
                    Take a Smarter Step
                    <span> Towards Better Health.</span>
                </h2>

                <p>
                    Understand your health, discover useful insights and
                    build healthier everyday habits with HealthGuard AI.
                </p>

                <Link to="/register" className="cta-button">
                    Get Started
                    <span>→</span>
                </Link>

                <small>
                    For health awareness and wellness guidance only.
                </small>
            </div>
        </section>
    );
}

export default FinalCTA;