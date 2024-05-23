import React from "react";
import SectionHeader from "./SectionHeader";
import { FaCrown } from "react-icons/fa";

import { faqs } from "../data";
import FAQ from "./FAQ";

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs_container">
        <SectionHeader icon={<FaCrown />} title="FAQs" />
        <div className="faqs_wrapper">
          {faqs.map(({ id, question, answer }) => {
            return <FAQ key={id} question={question} answer={answer} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
