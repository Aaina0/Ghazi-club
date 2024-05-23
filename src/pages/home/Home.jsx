import React from "react";
import "./home.css";
import MainHeader from "../../components/MainHeader";
import Program from "../../components/Program";
import Values from "../../components/Values";
import FAQs from "../../components/FAQs";


function Home() {
  return (
    <div>
      <MainHeader />
      <Program />
      <Values />
      <FAQs />
      
    </div>
  );
}

export default Home;
