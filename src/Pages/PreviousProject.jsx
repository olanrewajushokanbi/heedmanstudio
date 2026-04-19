import { PreviousProjects } from "./PreviousProjectData";
import "./PreviousProject.css";
import { Link } from "react-router";
import { Footer } from "./Footer";
import { ChevronDown } from "lucide-react";
export function PreviousProjectPage() {
  return (
    <>
      <title>Heedman Studio</title>
      <div className="hero-section">
        <nav className="main-nav">
          <img className="new-logo" src="images/new-logo.png" />
          <ul className="nav-sub">
            <li>
              <Link to="/" className="nav-link ">
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
              <Link className="nav-link active" to="/PreviousProjectPage">
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
              <a href="/">Home</a>
              <a href="/EquipmentPage">Equipment</a>
              <a href="/PreviousProjectPage">Previous Project</a>
            </nav>
          </div>
        </nav>
        <div className="overlay-section">
          <div className="project-hero-text">
            <div className="project-heading">Previous Project</div>

            <div className="project-description">
              A Showcase of Our Work in Film, Televison, <br /> and Commercial
              Production.
            </div>
          </div>
        </div>
      </div>

      <div className="projects-section">
        <div className="projects-grid">
          {PreviousProjects.map((PreviousProject) => {
            return (
              <>
                <div className="project-card">
                  <img
                    className="project-image"
                    src={PreviousProject.image}
                  ></img>
                  <div className="project-name">{PreviousProject.name}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
