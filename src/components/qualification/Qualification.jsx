import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Experience
          </div>
        </div>
        {/* Qualification section */}
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  MCA-Full Stack Web Development
                </h3>
                <span className="qualification__subtitle">
                  Parul University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2024 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">BCA</h3>
                <span className="qualification__subtitle">
                  Siddharth University Kapilvastu
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> </i>
                  2020 - 2023
                </div>
              </div>
            </div>
            
             <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Intermediate
                </h3>
                <span className="qualification__subtitle">
                  City Montessori Inter College, Balrampur
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                   2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">
                City Montessori Inter College, Balrampur
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> </i>
                  2018
                </div>
              </div>
            </div> 
          </div>
        </div>





        {/* Experience Section */}
        <div className="qualification__sections">
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Full Stack Web Development (MERN Stack)
                </h3>
                <span className="qualification__subtitle">Edureka</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 (six month)
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Cognifyz</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> </i>
                  2024( one month)
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
