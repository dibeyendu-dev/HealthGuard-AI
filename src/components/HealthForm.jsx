import "../css/dashboard.css";

function HealthForm() {
    return (
        <section className="health-form-section">
            <div className="health-form-header">
                <span className="section-badge">✦ Health Assessment</span>

                <h2>
                    Tell Us About Your
                    <span> Lifestyle</span>
                </h2>

                <p>
                    Provide some basic information to help HealthGuard AI
                    understand your current lifestyle and health habits.
                </p>
            </div>

            <form className="health-form">

                <div className="form-section-title">
                    <span>👤</span>
                    <div>
                        <h3>Basic Information</h3>
                        <p>Tell us a little about yourself.</p>
                    </div>
                </div>

                <div className="form-grid">

                    <div className="health-input">
                        <label>Age</label>
                        <input
                            type="number"
                            placeholder="Enter your age"
                        />
                    </div>

                    <div className="health-input">
                        <label>Gender</label>
                        <select>
                            <option value="">Select gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="health-input">
                        <label>Height (cm)</label>
                        <input
                            type="number"
                            placeholder="e.g. 170"
                        />
                    </div>

                    <div className="health-input">
                        <label>Weight (kg)</label>
                        <input
                            type="number"
                            placeholder="e.g. 65"
                        />
                    </div>

                </div>

                <div className="form-section-title">
                    <span>🏃</span>
                    <div>
                        <h3>Lifestyle Habits</h3>
                        <p>Help us understand your daily routine.</p>
                    </div>
                </div>

                <div className="form-grid">

                    <div className="health-input">
                        <label>Daily Exercise</label>
                        <select>
                            <option value="">Select activity level</option>
                            <option>Very Low</option>
                            <option>Low</option>
                            <option>Moderate</option>
                            <option>High</option>
                        </select>
                    </div>

                    <div className="health-input">
                        <label>Sleep (hours/day)</label>
                        <input
                            type="number"
                            step="0.1"
                            placeholder="e.g. 7"
                        />
                    </div>

                    <div className="health-input">
                        <label>Daily Water Intake (L)</label>
                        <input
                            type="number"
                            step="0.1"
                            placeholder="e.g. 2.5"
                        />
                    </div>

                    <div className="health-input">
                        <label>Diet Quality</label>
                        <select>
                            <option value="">Select diet quality</option>
                            <option>Poor</option>
                            <option>Average</option>
                            <option>Good</option>
                            <option>Excellent</option>
                        </select>
                    </div>

                </div>

                <div className="form-section-title">
                    <span>🌿</span>
                    <div>
                        <h3>Health Habits</h3>
                        <p>These questions help improve the assessment.</p>
                    </div>
                </div>

                <div className="health-options">

                    <div className="option-group">
                        <label>Do you smoke?</label>

                        <div className="option-buttons">
                            <label>
                                <input type="radio" name="smoking" />
                                <span>Yes</span>
                            </label>

                            <label>
                                <input type="radio" name="smoking" />
                                <span>No</span>
                            </label>
                        </div>
                    </div>

                    <div className="option-group">
                        <label>Do you consume alcohol?</label>

                        <div className="option-buttons">
                            <label>
                                <input type="radio" name="alcohol" />
                                <span>Yes</span>
                            </label>

                            <label>
                                <input type="radio" name="alcohol" />
                                <span>No</span>
                            </label>
                        </div>
                    </div>

                    <div className="option-group">
                        <label>How would you rate your stress?</label>

                        <div className="option-buttons">
                            <label>
                                <input type="radio" name="stress" />
                                <span>Low</span>
                            </label>

                            <label>
                                <input type="radio" name="stress" />
                                <span>Medium</span>
                            </label>

                            <label>
                                <input type="radio" name="stress" />
                                <span>High</span>
                            </label>
                        </div>
                    </div>

                </div>

                <div className="health-form-action">
                    <button type="submit">
                        Analyze My Health
                        <span>→</span>
                    </button>

                    <small>
                        Your information is used for health awareness and
                        wellness guidance.
                    </small>
                </div>

            </form>
        </section>
    );
}

export default HealthForm;