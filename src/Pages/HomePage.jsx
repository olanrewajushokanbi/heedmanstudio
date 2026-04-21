import { Footer } from "./Footer";
import "./HomePage.css";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";

export function HomePage() {
  return (
    <>
      <title>HeedMan Studio</title>
      <header className="hero">
        <nav className="main-nav">
          <img className="new-logo" src="images/new-logo.png" />
          <ul className="nav-sub">
            <li>
              <Link to="/" className="nav-link active">
                {" "}
                Home
              </Link>
            </li>

            <li>
              <Link to="/EquipmentPage" className="nav-link">
                Equipment
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/PreviousProjectPage">
                Previous Project
              </Link>
            </li>
            <li className="contact-items">
              <button className="contact-btn">
                Contact
                <div className="contact-dropdown">
                  <div>
                    {" "}
                    <i className="fa-solid fa-envelope"></i>
                    <a
                      className="address-link"
                      href="mailto:olanrewajushokanbi@gmail.com"
                    >
                      olanrewajushokanbi@gmail.com
                    </a>
                  </div>

                  <div>
                    <i className="fa-solid fa-phone"></i>
                    <a className="address-link" href="tel:08121907072">
                      08121907072
                    </a>
                  </div>
                </div>
              </button>
            </li>
          </ul>
          <div className="logo-menu">
            <ChevronDown size={45} color="white" className="sidebar" />
            <nav className="logo-nav">
              <Link to="/">Home</Link>
              <Link to="/EquipmentPage">Equipment</Link>
              <Link to="/PreviousProjectPage">Previous Project</Link>
            </nav>
          </div>
        </nav>
        <div className="overlay">
          <div className="hero-text">
            <div className="company-name">Heedman Studios</div>
            <div className="subtitle">
              Grip Technical | Film & TV Commercials
            </div>
            <div className="page-description">
              Experienced Grip Department Professional
            </div>

            <div className="page-description-note">
              Providing expert grip services for film, television, and
              commercial productions - <br />
              with a dedication to precision and safety
            </div>
          </div>
        </div>
      </header>

      <section className="cards-section">
        <div className="cards-container">
          <div className="card-group">
            <h2>Equipment</h2>
            <div className="card-grid">
              <div className="card">
                <img
                  className="equipment-image"
                  src="images/Hygraullic-dolly.png"
                  alt="Hydraullic-dolly"
                />

                <div className="equipment-name">Hydraullic-dolly</div>
              </div>

              <div className="card">
                <img
                  className="equipment-image"
                  src="images/arri-arriflex-arrihead-ii-geared-head-1.jpg.webp"
                  alt="Hydraullic-dolly"
                />

                <div className="equipment-name">Arri-arriflex-arrihead-ii</div>
              </div>

              <div className="card">
                <img
                  className="equipment-image"
                  src="images/tripod2.webp"
                  alt="Hydraullic-dolly"
                />

                <div className="equipment-name">Hydraullic-dolly</div>
              </div>

              <div className="card">
                <img
                  className="equipment-image"
                  src="images/Slider-Proaim-scaled.jpg"
                  alt="Hydraullic-dolly"
                />

                <div className="equipment-name">Hydraullic-dolly</div>
              </div>
            </div>
            <Link to="/equipmentPage" className="section-link">
              View Set Equipment
            </Link>
          </div>

          <div className="card-group">
            <h2>Previous Work</h2>
            <div className="card-grid">
              <div className="card">
                <img
                  className="equipment-image"
                  src="images/MyFathersShadow.webp"
                />

                <div className="equipment-name">My Fathers Shadow</div>
              </div>

              <div className="card">
                <img
                  className="equipment-image"
                  src="images/ToKillaMonkey.jpg"
                />

                <div className="equipment-name">To Kill A Monkey</div>
              </div>

              <div className="card">
                <img className="equipment-image" src="images/sugar-rush.jpg" />

                <div className="equipment-name">Sugar Rush</div>
              </div>

              <div className="card">
                <img
                  className="equipment-image"
                  src="images/Wale_Davies_Profile.jpg"
                />

                <div className="equipment-name">Wale Davies</div>
              </div>
            </div>
            <Link to="/PreviousProjectPage" className="section-link">
              View Previous Project
            </Link>
          </div>
        </div>

        <div className="cards-container2">
          <div className="set-experience">On Set Experience</div>
          <div className="set-experience2">
            Available for film, TV and Commercials Production
          </div>
          <div className="card-group2">
            <div className="work-image-div">
              <img className="work-image" src="images/service3.jpg" />
            </div>
            <div className="work-image-div">
              <img className="work-image" src="images/service6.jpg" />
            </div>
            <div className="work-image-div">
              <img className="work-image" src="images/service1.jpg" />
            </div>
            <div className="work-image-div">
              <img className="work-image" src="images/service2.jpg" />
            </div>
            <div className="work-image-div">
              <img className="work-image" src="images/hero2.jpg" />
            </div>
            <div className="work-image-div">
              <img className="work-image" src="images/hero1.jpg" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
