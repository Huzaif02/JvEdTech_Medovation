import React from 'react';

const Facts = () => {
  return (
    <>
      <section id="facts" className="facts">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="section-header">
                <h2 className="text-white">Our Achievements</h2>
                <p>Empowering education and innovation globally with impactful EdTech solutions.</p>
              </div>
              <div className="row counters">
                <div className="col-lg-4 col-6 text-center">
                  <span className="purecounter">30+</span>
                  <h3>EVENTS</h3>
                  <p>Diverse Reach</p>
                </div>
                <div className="col-lg-4 col-6 text-center">
                  <span className="purecounter">10+</span>
                  <h3>PROJECTS</h3>
                  <p>Successfully Delivered</p>
                </div>
                <div className="col-lg-4 col-6 text-center">
                  <span className="purecounter">20,000+</span>
                  <h3>LEARNERS</h3>
                  <p>Impacted Till Date</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facts;
