import "../css/home.css";

function AICompanion() {
    return (
        <section className="ai-section">
            <div className="ai-container">
                <div className="ai-content">
                    <span className="section-badge">✦ Your AI Companion</span>

                    <h2>
                        Meet Your
                        <span> Smart Health Companion</span>
                    </h2>

                    <p>
                        HealthGuard AI combines your health insights with
                        Google Gemini AI to provide simple, personalized and
                        practical wellness guidance.
                    </p>

                    <div className="ai-benefits">
                        <div className="ai-benefit">
                            <span>🥗</span>
                            <div>
                                <strong>Personalized Diet</strong>
                                <p>Get lifestyle-friendly food suggestions.</p>
                            </div>
                        </div>

                        <div className="ai-benefit">
                            <span>🏃</span>
                            <div>
                                <strong>Exercise Guidance</strong>
                                <p>Get simple activity recommendations.</p>
                            </div>
                        </div>

                        <div className="ai-benefit">
                            <span>😴</span>
                            <div>
                                <strong>Sleep & Wellness</strong>
                                <p>Improve your daily health habits.</p>
                            </div>
                        </div>

                        <div className="ai-benefit">
                            <span>💧</span>
                            <div>
                                <strong>Hydration Tips</strong>
                                <p>Build better hydration habits.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ai-visual">
                    <div className="ai-glow"></div>

                    <div className="ai-chat-card">
                        <div className="ai-chat-header">
                            <div className="ai-profile">
                                <div className="ai-avatar-large">✦</div>
                                <div>
                                    <strong>HealthGuard AI</strong>
                                    <small>AI Health Companion</small>
                                </div>
                            </div>

                            <div className="ai-online">
                                <span></span>
                                Online
                            </div>
                        </div>

                        <div className="chat-body">
                            <div className="chat-message ai-message-box">
                                <span>✦</span>
                                <p>
                                    Based on your health information, here are
                                    some simple suggestions for you.
                                </p>
                            </div>

                            <div className="chat-message user-message-box">
                                <p>What should I focus on today?</p>
                            </div>

                            <div className="chat-message ai-message-box">
                                <span>✦</span>
                                <p>
                                    Stay hydrated, include some physical activity,
                                    and maintain a balanced diet today. 🌿
                                </p>
                            </div>
                        </div>

                        <div className="ai-chat-input">
                            <span>Ask your health companion...</span>
                            <button>→</button>
                        </div>
                    </div>

                    <div className="ai-floating ai-floating-one">
                        🧠 Smart Insights
                    </div>

                    <div className="ai-floating ai-floating-two">
                        ✨ Personalized
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AICompanion;