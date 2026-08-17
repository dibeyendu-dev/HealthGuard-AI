import "../css/home.css";

function WhyChooseUs() {
  const points = [
    {
      icon: "🎯",
      title: "Simple & Easy",
      text: "Designed to make health information easy to understand for everyone."
    },
    {
      icon: "🤖",
      title: "AI Powered",
      text: "Gemini AI provides personalized wellness guidance based on your results."
    },
    {
      icon: "🧠",
      title: "ML Assisted",
      text: "Machine Learning helps assess basic lifestyle-related health risks."
    },
    {
      icon: "🔒",
      title: "Privacy Focused",
      text: "Your personal health information is handled through secure access."
    },
    {
      icon: "📱",
      title: "Anywhere Access",
      text: "Use your health companion comfortably on desktop, tablet or mobile."
    },
    {
      icon: "📈",
      title: "Track Progress",
      text: "Review your previous health reports and monitor your wellness journey."
    }
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        <div className="section-heading">
          <span className="section-badge">✦ Why HealthGuard AI?</span>

          <h2>
            Built Around
            <span> Your Health Journey</span>
          </h2>

          <p>
            A simple combination of technology, health insights and
            personalized guidance to help you make better lifestyle choices.
          </p>
        </div>

        <div className="why-grid">
          {points.map((point, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{point.icon}</div>

              <div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;