import React from "react";
import SectionHeader from "./SectionHeader";
import { values } from "../data";
import { FaCrown } from "react-icons/fa";

import pic21 from "../images/pic21.jpg";
import Card from "../UI/Card";

const Values = () => {
  return (
    <section className="values">
      <div className="container values_container">
        <div className="values_left">
          <div className="values_image">
            <img src={pic21} alt="Descriptive text" />
          </div>
        </div>
        <div className="values_right">
          <SectionHeader icon={<FaCrown />} title="Values" />
          <div className="values_wrapper">
            {values.map(({ id, title, desc }) => (
              <Card key={id} className="values_value">
                <span></span>
                <h4>{title}</h4>
                <small>{desc}</small>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
