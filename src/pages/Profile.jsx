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

          <button className="edit-profile-btn">
            Edit Profile
          </button>

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
              <strong>user@example.com</strong>
            </div>

            <div className="profile-field">
              <span>Age</span>
              <strong>22 Years</strong>
            </div>

            <div className="profile-field">
              <span>Gender</span>
              <strong>Male</strong>
            </div>

          </div>

          <h2 className="health-title">
            Health Preferences
          </h2>