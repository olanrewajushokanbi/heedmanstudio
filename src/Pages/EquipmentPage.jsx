import "./EquipmentPage.css";
import { Equipments } from "./Equipment";
import { Fragment, useState } from "react";
import { Link } from "react-router";
import { Footer } from "./Footer";
import { categories } from "./Categories";
import { ChevronDown } from "lucide-react";

export function EquipmentPage() {
  const [activeCategory, setActiveCartegory] = useState("Tripods");

  const filteredEquipment = Equipments.filter(
    (item) => item.category === activeCategory
  );

  return (
    <>
      <title>Heedman Studio</title>
      <header className="hero2">
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
              <Link to="/EquipmentPage" className="nav-link active">
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
            <ChevronDown size={40} color="white" className="sidebar" />
            <nav className="logo-nav">
              <a href="/">Home</a>
              <a href="/EquipmentPage">Equipment</a>
              <a href="/PreviousProjectPage">Previous Project</a>
            </nav>
          </div>
        </nav>
        <div className="overlay2">
          <div className="hero-text2">
            <div className="hero-text-heading2">Set Equipment</div>
            <div className="hero-text-sub">Professional Grip Equipment</div>

            <div className="hero-text-details">
              High-quality and rigging equipment available for <br />
              film, television and commercial productions
            </div>
          </div>
        </div>
      </header>

      <section className="equipment">
        <div className="equipment-tab-wrapper">
          {categories.map((category) => (
            <div key={category.value} className="equipment-tab">
              <button
                className={`tab ${
                  activeCategory === category.value ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCartegory(category.value);
                }}
              >
                {category.value}
              </button>
            </div>
          ))}
        </div>

        <div className="equipment-select">
          <select
            value={activeCategory}
            onChange={(event) => setActiveCartegory(event.target.value)}
          >
            {" "}
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div className="equipment-div">
          {filteredEquipment.map((item) => {
            return (
              <Fragment key={item.id}>
                <div className="equipment-group">
                  <img className="equipment-image" src={item.image} />

                  <div className="equipment-name">{item.name}</div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
