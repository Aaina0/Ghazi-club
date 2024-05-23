import React from "react";
import pic4 from "../../images/pic4.jpg";
import pic8 from "../../images/pic8.jpg";
import pic15 from "../../images/pic15.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about_intro">
        <div className="container">
          <h1 className="about_title">About Us</h1>
          <p className="about_paragraph">
            Welcome to Ghazi Taekwondo and Fitness Club, a community-driven platform dedicated to enhancing your learning journey. We strive to empower individuals with knowledge and skills through engaging programs and events. Our mission is to foster a supportive learning environment that encourages personal growth and professional development. Join us as we explore new opportunities and unlock potential together.
          </p>
        </div>
      </section>
      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={pic4} alt="Owner" />
          </div>
          <div>
            <h1>Owner of Ghazi Taekwondo and Fitness Club</h1>
            <p>
              Nadeem Ali Janjua, a Black Belt 4 Dan (WTF), is a prominent figure in the martial arts community, serving as a Trainer & Chief Organizer. He holds the position of General Secretary of the Lahore Division Taekwondo Association and the Children Sports Committee Pakistan. With his extensive expertise and leadership, Nadeem Ali Janjua plays a pivotal role in uplifting the martial arts community, both locally and nationally, promoting sportsmanship and personal development through Taekwondo and other disciplines.
            </p>
          </div>
        </div>
      </section>
      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={pic15} alt="Vision" />
          </div>
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Our vision at Ghazi Taekwondo and Fitness Club is to create a world where access to quality education and opportunities for personal growth are available to everyone. We aim to build a global community that fosters lifelong learning, innovation, and collaboration. By empowering individuals through knowledge and skills, we envision a future where every person can reach their full potential and make a positive impact on society.
            </p>
          </div>
        </div>
      </section>
      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={pic8} alt="Vision" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Our vision at Ghazi Taekwondo and Fitness Club is to create a world where access to quality education and opportunities for personal growth are available to everyone. We aim to build a global community that fosters lifelong learning, innovation, and collaboration. By empowering individuals through knowledge and skills, we envision a future where every person can reach their full potential and make a positive impact on society.
            </p>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default About;
