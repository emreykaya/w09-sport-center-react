import React from 'react';
import './Trainers.css';

const Trainers = () => {
  return (
    <section id="trainers">
      <div className="container">
        {/* TITLE */}
        <h2 data-aos="fade" data-aos-delay="0">OUR BEST TRAINERS</h2>
        <span data-aos="fade" data-aos-delay="0"></span>
        
        {/* TEXT */}
        <p data-aos="fade" data-aos-delay="100">
          Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.
        </p>
        
        {/* TRAINERS */}
        <div data-aos="fade" data-aos-delay="150" className="image-container">
          
          {/* TRAINER 01 */}
          <div className="image-trainer">
            <span className="bar top"></span>
            <span className="bar right"></span>
            <span className="bar left"></span>
            <span className="bar bottom"></span>
            <img src="images/trainer1.jpg" alt="Trainer 1" />
            <div className="trainer-info">
              <h4>Jane Doe</h4>
              <p>Cardio Trainer</p>
            </div>
          </div>
          
          {/* TRAINER 02 */}
          <div className="image-trainer">
            <span className="bar top"></span>
            <span className="bar right"></span>
            <span className="bar left"></span>
            <span className="bar bottom"></span>
            <img src="images/trainer2.jpg" alt="Trainer 2" />
            <div className="trainer-info">
              <h4>John Doe</h4>
              <p>Fitness Trainer</p>
            </div>
          </div>
          
          {/* TRAINER 03 */}
          <div className="image-trainer">
            <span className="bar top"></span>
            <span className="bar right"></span>
            <span className="bar left"></span>
            <span className="bar bottom"></span>
            <img src="images/trainer3.jpg" alt="Trainer 3" />
            <div className="trainer-info">
              <h4>Jane Doe</h4>
              <p>Cardio Trainer</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Trainers;
