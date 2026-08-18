import { useState } from "react";
import "../css/dashboard.css";

function HealthForm() {
    const [formData, setFormData] = useState({
        age: "",
        gender: "",
        height: "",
        weight: "",
        exercise: "",
        sleep: "",
        water: "",
        diet: "",
        smoking: "",
        alcohol: "",
        stress: ""
    });

    const [bmi, setBmi] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const heightInMeter = Number(formData.height) / 100;
        const weight = Number(formData.weight);

        if (heightInMeter > 0 && weight > 0) {
            const calculatedBMI =
                weight / (heightInMeter * heightInMeter);

            setBmi(calculatedBMI.toFixed(1));
        }
    }

    return (
        <section className="health-form-section" id="health-assessment">

            <div className="health-form-header">
                <span className="section-badge">
                    ✦ Health Assessment
                </span>

                <h2>
                    Tell Us About Your
                    <span> Lifestyle</span>
                </h2>

                <p>
                    Provide some basic information to understand your
                    current lifestyle and health habits.
                </p>
            </div>

            <form className="health-form" onSubmit={handleSubmit}>

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
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Enter your age"
                            required
                        />
                    </div>

                    <div className="health-input">
                        <label>Gender</label>

                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
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
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                            placeholder="e.g. 170"
                            required
                        />
                    </div>

                    <div className="health-input">
                        <label>Weight (kg)</label>

                        <input
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            placeholder="e.g. 65"
                            required
                        />
                    </div>

                </div>

                <div className="form-section-title">
                    <span>🏃</span>

                    <div>
                        <h3>Lifestyle Habits</h3>
                        <p>Tell us about your daily routine.</p>
                    </div>
                </div>

                <div className="form-grid">

                    <div className="health-input">
                        <label>Daily Exercise</label>

                        <select
                            name="exercise"
                            value={formData.exercise}
                            onChange={handleChange}
                            required
                        >
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
                            name="sleep"
                            value={formData.sleep}
                            onChange={handleChange}
                            step="0.1"
                            placeholder="e.g. 7"
                            required
                        />
                    </div>

                    <div className="health-input">
                        <label>Daily Water Intake (L)</label>

                        <input
                            type="number"
                            name="water"
                            value={formData.water}
                            onChange={handleChange}
                            step="0.1"
                            placeholder="e.g. 2.5"
                            required
                        />
                    </div>

                    <div className="health-input">
                        <label>Diet Quality</label>

                        <select
                            name="diet"
                            value={formData.diet}
                            onChange={handleChange}
                            required
                        >
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
                        <p>These details help improve the assessment.</p>
                    </div>
                </div>

                <div className="health-options">

                    <div className="option-group">
                        <label>Do you smoke?</label>

                        <div className="option-buttons">

                            <label>
                                <input
                                    type="radio"
                                    name="smoking"
                                    value="Yes"
                                    checked={formData.smoking === "Yes"}
                                    onChange={handleChange}
                                    required
                                />
                                <span>Yes</span>
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="smoking"
                                    value="No"
                                    checked={formData.smoking === "No"}
                                    onChange={handleChange}
                                />
                                <span>No</span>
                            </label>

                        </div>
                    </div>

                    <div className="option-group">
                        <label>Do you consume alcohol?</label>

                        <div className="option-buttons">

                            <label>
                                <input
                                    type="radio"
                                    name="alcohol"
                                    value="Yes"
                                    checked={formData.alcohol === "Yes"}
                                    onChange={handleChange}
                                    required
                                />
                                <span>Yes</span>
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="alcohol"
                                    value="No"
                                    checked={formData.alcohol === "No"}
                                    onChange={handleChange}
                                />
                                <span>No</span>
                            </label>

                        </div>
                    </div>

                    <div className="option-group">
                        <label>How would you rate your stress?</label>

                        <div className="option-buttons">

                            <label>
                                <input
                                    type="radio"
                                    name="stress"
                                    value="Low"
                                    checked={formData.stress === "Low"}
                                    onChange={handleChange}
                                    required
                                />
                                <span>Low</span>
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="stress"
                                    value="Medium"
                                    checked={formData.stress === "Medium"}
                                    onChange={handleChange}
                                />
                                <span>Medium</span>
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="stress"
                                    value="High"
                                    checked={formData.stress === "High"}
                                    onChange={handleChange}
                                />
                                <span>High</span>
                            </label>

                        </div>
                    </div>

                </div>

                {bmi && (
                    <div className="bmi-preview">
                        <span>⚖️</span>
                        <div>
                            <small>Your Calculated BMI</small>
                            <strong>{bmi}</strong>
                        </div>
                    </div>
                )}

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