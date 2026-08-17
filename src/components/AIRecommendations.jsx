import RecommendationCard from "./RecommendationCard";
import "../css/dashboard.css";

function AIRecommendations() {
    return (
        <section className="recommendations-section">
            <div className="recommendations-header">
                <span className="section-badge">✦ AI Health Companion</span>
                <h2>
                    Personalized <span>Recommendations</span>
                </h2>
                <p>
                    Simple wellness suggestions based on your health information.
                </p>
            </div>

            <div className="recommendations-grid">
                <RecommendationCard
                    icon="🥗"
                    title="Nutrition"
                    text="Maintain a balanced diet with vegetables, fruits and whole foods."
                />

                <RecommendationCard
                    icon="🏃"
                    title="Physical Activity"
                    text="Try regular physical activity and gradually increase your daily movement."
                />

                <RecommendationCard
                    icon="😴"
                    title="Sleep"
                    text="Maintain a consistent sleep schedule and get adequate rest."
                />

                <RecommendationCard
                    icon="💧"
                    title="Hydration"
                    text="Keep yourself hydrated throughout the day."
                />

                <RecommendationCard
                    icon="🧘"
                    title="Stress Management"
                    text="Take regular breaks and practice simple relaxation activities."
                />

                <RecommendationCard
                    icon="✨"
                    title="AI Tip"
                    text="Small and consistent lifestyle improvements can support overall wellness."
                />
            </div>

            <div className="ai-note">
                🤖 Recommendations are for general wellness guidance only.
            </div>
        </section>
    );
}

export default AIRecommendations;