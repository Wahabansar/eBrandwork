import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";

import "./index.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="container">
        <footer className="py-5">
          <div className="row row-cols-1 row-cols-md-3 text-start">
            <div className="col mb-3">
              <h4>
                <img
                  src={require("../assets/logo/ebrand-logo.png")}
                  alt="optiwise-logo"
                  width={200}
                />
              </h4>
              <br/>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a className="nav-link border-0 p-0 text-dark text-start d-flex mob-style-ft-lo">
                    <LocationOnIcon className="color-orange-icon" />
                    <lable className="ms-2 ml-mob-0">
                    LG-30 Sadiq Trade Center, Gulberg-II, Lahore - Pakistan
                    </lable>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="mailto:info@ebrandworks.com"
                    className="nav-link border-0 p-0 text-dark text-start"
                  >
                    <MailIcon className="color-orange-icon" />
                    <lable className="ms-2">info@ebrandworks.com</lable>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="tel:+92 336 7364035​"
                    className="nav-link border-0 p-0 text-dark text-start"
                  >
                    <PhoneIcon className="color-orange-icon" />
                    <lable className="ms-2">+92 336 7364035​</lable>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col mb-3">
              <h4>Our Services</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/#pricing" className="nav-link p-0 text-muted">
                   Services
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/#trust-kodex" className="nav-link p-0 text-muted">
                    Case Study
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/#about" className="nav-link p-0 text-muted">
                    Our Process
                  </a>
                </li>

                <li className="nav-item mb-2">
                  <Link
                    to="/privacy-policy"
                    className="nav-link p-0 text-muted"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col mb-3">
              <form>
                <h4>Join Our Newsletter</h4>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-orange rounded-0" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <hr />

          <div className="row">
            <p className="card-text text-dark">
              &copy; Copyright{" "}
              <a className="ft-nav-link" href="/">
              eBrand Works
              </a>{" "}
              All Right Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
