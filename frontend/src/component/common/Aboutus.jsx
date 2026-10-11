import React from "react";
import "../css/aboutus.css";
import Header from "./Header";
import Footer from "./Footer";

function AboutUs() {
  return (
    <>
      <Header />

      <div className="about-page">

        <section className="about-banner">
          <h1>About Internship Hub</h1>
          <p>
            Connecting students with the right internship opportunities.
          </p>
        </section>

        <section className="about-content">

          <div className="about-box">
            <h2>Who We Are</h2>
            <p>
              Internship Hub is a platform designed to help students find
              internship opportunities and gain practical experience.
              It also helps internship providers connect with students.
            </p>
          </div>

          <div className="about-box">
            <h2>Our Mission</h2>
            <p>
              Our mission is to make the internship search process simple
              and accessible for students while creating better
              opportunities for learning and career growth.
            </p>
          </div>

          <div className="about-box">
            <h2>For Students</h2>
            <p>
              Students can register, explore internship opportunities and
              gain valuable practical knowledge that can help them build
              their careers.
            </p>
          </div>

          <div className="about-box">
            <h2>For Internship Providers</h2>
            <p>
              Internship providers can register and share internship
              opportunities with students who are looking to develop
              their skills and gain real-world experience.
            </p>
          </div>

        </section>

        <section className="about-bottom">
          <h2>Start Your Internship Journey</h2>
          <p>
            Learn, gain experience and take your next step with Internship Hub.
          </p>
        </section>

      </div>

      <Footer />
    </>
  );
}

export default AboutUs;