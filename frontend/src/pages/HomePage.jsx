import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="home">

      {/* HERO SECTION */}
  <div className="navbar">
     <h1 className="hero-title">
          Placement<span>Pilot</span>
        </h1>
        
        <div className="hero-actions">
            <Link to="/register" className="btn primary">
            Get Started
          </Link>

          <Link to="/login" className="btn secondary">
            Sign In
          </Link>
        </div>
          
  </div>
     
      <section className="hero">

        <p className="hero-subtitle">
          Land your dream role with AI precision
        </p>

        <p className="hero-text">
          PlacementPilot connects ambitious talent with world-class employers
          using intelligent matching and career insights.
        </p>

       <Link to="/login" className="hero-btn">Already a member? Sign In</Link>
      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="feature-card">
          <h3>Smart Matching</h3>
          <p>AI analyzes your skills to find perfect role fits.</p>
        </div>

        <div className="feature-card">
          <h3>Premium Employers</h3>
          <p>Exclusive opportunities from top-tier companies.</p>
        </div>

        <div className="feature-card">
          <h3>Career Growth</h3>
          <p>Track progress with salary benchmarks.</p>
        </div>

      </section>
    </div>
  );
}