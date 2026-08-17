import "../css/home.css";

function HowItWorks() {
    const steps = [
        {
            number: "01",
            icon: "📝",
            title: "Enter Your Health Data",
            text: "Provide basic information about your health, lifestyle, sleep, activity and daily habits."
        },
        {
            number: "02",
            icon: "🧠",
            title: "AI & ML Analysis",
            text: "Our Machine Learning model analyzes your data and identifies basic health-risk levels."
        },
        {
            number: "03",
            icon: "✨",
            title: "Get Smart Insights",
            text: "Google Gemini AI turns the analysis into simple and personalized wellness suggestions."
        },
        {
            number: "04",
            icon: "📈",
            title: "Track Your Progress",
            text: "Save your health reports and review your previous results to understand your progress."
        }
    ];

    return (
        <section className="how-section" id="how-it-works">
            <div className="how-container">
                <div className="section-heading">
                    <span className="section-badge">✦ Simple Process</span>

                    <h2>
                        How <span>HealthGuard AI</span> Works
                    </h2>

                    <p>
                        A simple four-step journey to understand your health
                        and build better lifestyle habits.
                    </p>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div className="step-item" key={index}>
                            <div className="step-number">{step.number}</div>

                            <div className="step-icon">
                                {step.icon}
                            </div>

                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.text}</p>
                            </div>

                            {index !== steps.length - 1 && (
                                <div className="step-line"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;