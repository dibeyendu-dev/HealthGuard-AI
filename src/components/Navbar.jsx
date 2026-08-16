import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo">
                    HealthGuard <span>AI</span>
                </Link>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/history">History</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/login" className="login-btn">Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;