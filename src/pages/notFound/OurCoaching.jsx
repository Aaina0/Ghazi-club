import React from "react";
import "./OurCoaching.css";
import OurItems from "../../components/OurItems"; // Update the import path if necessary
import pic17 from "../../images/pic17.jpg";
import pic13 from "../../images/pic13.jpg";
import pic25 from "../../images/pic25.jpg";
import pic7 from "../../images/pic7.jpg";
import pic23 from "../../images/pic23.jpg";
import pic19 from "../../images/pic19.jpg";
import pic18 from "../../images/pic18.jpg";
import pic20 from "../../images/pic20.jpg";

// Create an array of coaching items
const coaching = [
  {
    image: pic17,
    title: "KICK-BOXING",
    description:
      "At Ghazi Taekwondo and Fitness Club, our kickboxing coaching service provides dynamic workouts led by experienced instructors. Join us today to enhance your fitness and unleash your strength.",
  },
  {
    image: pic13,
    title: "TAEKWONDO",
    description:
      "Master the art of Taekwondo with expert coaching at Ghazi Taekwondo and Fitness Club. Our personalized instruction is tailored to your skill level, ensuring rapid progress and skill refinement. Join us today and unleash your full potential!",
  },
  {
    image: pic25,
    title: "MARTIAL ARTS",
    description:
      "At Ghazi Taekwondo and Fitness Club, our martial arts coaching service offers personalized instruction to empower individuals of all levels. Join us today and unleash your inner warrior!",
  },
  {
    image: pic7,
    title: "GYMNASTIC",
    description:
      "At Ghazi Taekwondo and Fitness Club, we offer expert gymnastics coaching for all ages and abilities. Led by experienced instructors, our classes develop strength, flexibility, and coordination, catering to beginners and advanced gymnasts. Join us to experience the exhilaration of gymnastics and achieve your fitness goals!",
  },
  {
    image: pic23,
    title: "YOGA",
    description:
      "At Ghazi Taekwondo and Fitness Club, our yoga coaching service offers a sanctuary for mind and body wellness. Led by experienced instructors, our classes cater to all levels, providing a holistic approach to fitness and relaxation. Join us to cultivate strength, flexibility, and inner peace through the transformative practice of yoga!",
  },
  {
    image: pic19,
    title: "ZUMBA",
    description:
      "At Ghazi Taekwondo and Fitness Club, our Zumba coaching service offers high-energy, fun-filled workouts led by experienced instructors. Join us to dance, sweat, and smile your way to better health!",
  },
  {
    image: pic18,
    title: "CROSSFIT GYM",
    description:
      "At Ghazi Taekwondo and Fitness Club, our CrossFit coaching service offers intense, results-driven workouts led by certified trainers. Join us today to push your limits and achieve your fitness goals!",
  },
];

const OurCoaching = () => {
  return (
    <div className="our-items-container-wrapper">
      <h1 className="our-items-title">Our Coaching</h1>
      <OurItems items={coaching} />
    </div>
  );
};

export default OurCoaching;
