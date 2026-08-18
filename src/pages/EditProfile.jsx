import "../css/EditProfile.css";

function EditProfile() {
  return (
    <div className="profile-page">

      <div className="profile-header">
        <span className="section-badge">✦ Edit Profile</span>

        <h1>
          Update Your <span>Profile</span>
        </h1>

        <p>
          Update your personal information and health preferences.
        </p>
      </div>

      <div className="profile-info">

        <div className="profile-grid">

          <div className="profile-field">
            <label>Full Name</label>
            <input type="text" defaultValue="Dibeyendu Maity" />
          </div>

          <div className="profile-field">
            <label>Email</label>
            <input type="email" defaultValue="user@example.com" />
          </div>

          <div className="profile-field">
            <label>Age</label>
            <input type="number" defaultValue="22" />
          </div>

          <div className="profile-field">
            <label>Gender</label>
            <select defaultValue="Male">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="profile-field">
            <label>Activity Level</label>
            <select defaultValue="Moderate">
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
            </select>
          </div>

          <div className="profile-field">
            <label>Sleep Goal</label>
            <input type="text" defaultValue="7-8 Hours" />
          </div>

          <div className="profile-field">
            <label>Water Goal</label>
            <input type="text" defaultValue="2.5 Litres" />
          </div>

          <div className="profile-field">
            <label>Health Goal</label>
            <input type="text" defaultValue="Healthy Lifestyle" />
          </div>

        </div>

        <button className="edit-profile-btn">
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default EditProfile;