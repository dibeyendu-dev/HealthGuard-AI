import "../css/home.css";

function Features() {
    const features = [
        {
            icon: "🧠",
            title: "AI Health Insights",
            text: "Get smart and personalized wellness insights based on your health information.",
            className: "feature-blue"
        },
        {
            icon: "❤️",
            title: "Risk Awareness",
            text: "Understand your basic lifestyle-related health risk levels with ML-powered analysis.",
            className: "feature-pink"
        },
        {
            icon: "📊",
            title: "Health Score",
            text: "Track your overall health score and understand where you can improve.",
            className: "feature-purple"
        },
        {
            icon: "🥗",
            title: "Lifestyle Guidance",
            text: "Receive personalized suggestions for diet, exercise, sleep and hydration.",
            className: "feature-green"
        },
        {
            icon: "📈",
            title: "Health History",
            text: "Keep track of your previous health analyses and monitor your progress.",
            className: "feature-orange"
        },
        {
            icon: "🛡️",
            title: "Private & Secure",
            text: "Your health information is protected with secure authentication and access control.",
            className: "feature-cyan"
        }
    ];

    return (
        <section className="features-section" id="features">
            <div className="features-container">
                <div className="section-heading">
                    <span className="section-badge">✦ Smart Healthcare</span>

                    <h2>
                        Everything You Need for a
                        <span> Healthier You</span>
                    </h2>

                    <p>
                        HealthGuard AI combines Machine Learning and Generative AI
                        to make your health journey smarter, simpler and more personal.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            className={`feature-card ${feature.className}`}
                            key={index}
                        >
                            <div className="feature-icon">
                                {feature.icon}
                            </div>

                            <h3>{feature.title}</h3>

                            <p>{feature.text}</p>

                            <div className="feature-arrow">↗</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;