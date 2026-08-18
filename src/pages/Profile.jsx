import { Link } from "react-router-dom";
import "../css/profile.css";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-header">
        <span className="section-badge">✦ My Profile</span>

        <h1>
          Your Health <span>Profile</span>
        </h1>

        <p>
          Manage your personal information and health preferences.
        </p>
      </div>

      <div className="profile-container">

        {/* Profile Card */}
        <div className="profile-card">

          <div className="profile-avatar">
            👤
          </div>

          <h2>Dibeyendu Maity</h2>
          <p>HealthGuard AI User</p>

          <Link to="/edit-profile" className="edit-profile-btn">
            Edit Profile
          </Link>

        </div>

        {/* Information */}
        <div className="profile-info">

          <h2>Personal Information</h2>

          <div className="profile-grid">

            <div className="profile-field">
              <span>Full Name</span>
              <strong>Dibeyendu Maity</strong>
            </div>

            <div className="profile-field">
              <span>Email</span>
              <strong>dibeyendumaity@gmail.com</strong>
            </div>

            <div className="profile-field">
              <span>Age</span>
              <strong>21 Years</strong>
            </div>

            <div className="profile-field">
              <span>Gender</span>
              <strong>Male</strong>
            </div>

          </div>

          <h2 className="health-title">
            Health Preferences
          </h2>
          <div className="profile-grid">

            <div className="profile-field">
              <span>Activity Level</span>
              <strong>Moderate</strong>
            </div>

            <div className="profile-field">
              <span>Sleep Goal</span>
              <strong>7–8 Hours</strong>
            </div>

            <div className="profile-field">
              <span>Water Goal</span>
              <strong>2.5 Litres</strong>
            </div>

            <div className="profile-field">
              <span>Health Goal</span>
              <strong>Healthy Lifestyle</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;