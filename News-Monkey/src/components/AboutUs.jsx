import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead text-white-50">
            Get to know more about who we are and what we do
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <div
        className="row justify-content-center text-center mb-5"
        style={{ margin: "40px" }}
      >
        <div className="col-md-8">
          <h2 className="fw-bold mb-3">Who We Are</h2>
          <p>
            We are a passionate team dedicated to bringing you the latest news
            and updates across various categories including entertainment,
            business, health, science, sports, and technology.
          </p>
          <p>
            Our mission is to keep you informed with accurate and timely
            information, all in one place.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="row text-center bg-light rounded py-4 mb-5 shadow-sm">
        <div className="col-6 col-md-3 mb-3 mb-md-0">
          <h3 className="fw-bold text-primary">6+</h3>
          <p className="text-muted mb-0">Categories</p>
        </div>
        <div className="col-6 col-md-3 mb-3 mb-md-0">
          <h3 className="fw-bold text-primary">10K+</h3>
          <p className="text-muted mb-0">Articles Delivered</p>
        </div>
        <div className="col-6 col-md-3">
          <h3 className="fw-bold text-primary">24/7</h3>
          <p className="text-muted mb-0">Live Updates</p>
        </div>
        <div className="col-6 col-md-3">
          <h3 className="fw-bold text-primary">100%</h3>
          <p className="text-muted mb-0">Free Access</p>
        </div>
      </div>

      {/* Mission / Vision / Values */}
      <div className="row text-center mb-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <div className="fs-1 mb-2">🎯</div>
              <h4 className="fw-bold">Our Mission</h4>
              <p className="text-muted">
                To deliver reliable news quickly and efficiently to everyone.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <div className="fs-1 mb-2">🔭</div>
              <h4 className="fw-bold">Our Vision</h4>
              <p className="text-muted">
                To become a trusted source of information for readers
                everywhere.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <div className="fs-1 mb-2">🤝</div>
              <h4 className="fw-bold">Our Values</h4>
              <p className="text-muted">
                Honesty, accuracy, and putting our readers first.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-primary text-white rounded py-5">
        <h3 className="fw-bold">Stay Updated With Us</h3>
        <p className="mb-4">
          Explore the latest headlines across every category, all in one place.
        </p>
        <Link to="/" className="btn btn-light btn-lg fw-bold">
          Browse News
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
