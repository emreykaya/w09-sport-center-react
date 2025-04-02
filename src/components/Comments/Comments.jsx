import React from 'react';
import './Comments.css';

const Comments = () => {
  return (
    <section id="comments">
      <div className="container">
        {/* TITLE */}
        <h2 data-aos="fade" data-aos-delay="0">REVIEW CLIENT</h2>
        <span data-aos="fade" data-aos-delay="0"></span>

        {/* TEXT */}
        <p data-aos="fade" data-aos-delay="100">
          Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.
        </p>

        {/* COMMENTS */}
        <div className="comments-container">
          
          {/* COMMENT 01 */}
          <div data-aos="fade" data-aos-delay="200" className="comment-item">
            {/* INFO */}
            <div className="comment-top">
              <div className="comment-img">
                <img src="images/client1.jpg" alt="Client 1" />
              </div>
              <div className="comment-info">
                <h5>Diet Expert</h5>
                <h6>CEO</h6>
              </div>
            </div>

            {/* SPEECH BUBBLE */}
            <div className="comment-bottom">
              <div className="comment-text speech-bubble">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi illo odio officia velit, 
                  et enim laboriosam magnam id incidunt, explicabo esse dolores rerum at quia sint ipsa doloribus facere? 
                  Hic architecto cumque expedita vel ut vero ullam cum eligendi in totam, iusto voluptatem unde! 
                  Ea eius iusto molestiae voluptatem.
                </p>
              </div>
            </div>
          </div>

          {/* COMMENT 02 */}
          <div data-aos="fade" data-aos-delay="250" className="comment-item">
            {/* INFO */}
            <div className="comment-top">
              <div className="comment-img">
                <img src="images/client2.jpg" alt="Client 2" />
              </div>
              <div className="comment-info">
                <h5>Cardio Trainer</h5>
                <h6>CEO</h6>
              </div>
            </div>

            {/* SPEECH BUBBLE */}
            <div className="comment-bottom">
              <div className="comment-text speech-bubble">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi illo odio officia velit, 
                  et enim laboriosam magnam id incidunt, explicabo esse dolores rerum at quia sint ipsa doloribus facere? 
                  Hic architecto cumque expedita vel ut vero ullam cum eligendi in totam, iusto voluptatem unde! 
                  Ea eius iusto molestiae voluptatem.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comments;
