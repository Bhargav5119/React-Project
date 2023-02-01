import React from "react";
import { Container } from "./FooterStyle";
import logo from "../assets/logo.png";
import Button from "./Button";

export default function Footer() {
  const quickLinks = [
    "About Us",
    "Destinations",
    "Latest Blog",
    "Our Team",
    "Contact Us",
  ];
  const supportLinks = [
    "Customer Support",
    "Privacy Policy",
    "Terms & Condition",
    "Forum",
    "Tour Guide",
  ];
  return (
    <Container>
      <div className="upper-footer">
        <div className="col" data-aos="fade-right"  data-aos-mirror="false"  data-aos-offset="300">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="desciption">
              You can dream, create, design, and build the most wonderful place.
            </p>
          <ul>
            <li>
              <span> +0213 456 987 </span>
            </li>
            <li>
              <span>kishansheth21@gmail.com</span>
            </li>
            <li>
              <span>www.youtube.com</span>
            </li>
          </ul>
        </div>
        <div className="col"  data-aos="fade-up"  data-aos-mirror="false"  data-aos-offset="300">
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col"  data-aos="fade-up"  data-aos-mirror="false"  data-aos-offset="300">
          <h2>Support</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col"  data-aos="fade-left"  data-aos-mirror="false"  >
          <h2>Newsletter</h2>
          <div className="newsletter">
            <input type="text" placeholder="Your Email" />
            <Button text="Subscribe Now" />
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <span>
          Copyright &copy; Travel. Designed by <a href="#">Bhargav Kanani</a>
        </span>
      </div>
    </Container>
  );
}
