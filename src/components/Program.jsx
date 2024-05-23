import React from "react";
import SectionHeader from "./SectionHeader";
import { FaCrown } from "react-icons/fa";
import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

function Program() {
  return (
    <section className="program">
      <div className="container programs_container">
        <SectionHeader icon={<FaCrown />} title="Programs" />

        <div className="program_wrapper">
          {programs.map(({ id, title, info,  }) => {
            return (
              <Card className="programs_program" key={id}>
                <h4>{title}</h4>
                <small>{info}</small>
                {/* Updated Link component */}
                <Link to='/ourCoaching' className="btn sm">
                  Learn More
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Program;
