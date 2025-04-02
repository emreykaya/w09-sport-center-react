import React from 'react';
import './Purchase.css';

const Purchase = () => {
  return (
    <section id="purchase">
      <div className="container">
        {/* TITLE */}
        <h2 data-aos="fade" data-aos-delay="0">PURCHASE FROM US</h2>
        <span data-aos="fade" data-aos-delay="0"></span>

        {/* TEXT */}
        <p data-aos="fade" data-aos-delay="100">
          Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.
        </p>

        <div data-aos="fade" data-aos-delay="150" className="image-container">
          
          {/* 01: KETTLEBELL */}
          <div className="purchase-item">
            <img src="images/purchase1.jpg" alt="Kettlebell 5kg" />
            <h5>Kettlebell / 5kg</h5>
            <p>89,99$ / 59,00$</p>
            <div className="purchase-bottom">
              <p>Add To Cart</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          {/* 02: TREADMILL */}
          <div className="purchase-item">
            <img src="images/purchase2.jpg" alt="Treadmill" />
            <h5>Treadmill</h5>
            <p>899,99$ / 599,00$</p>
            <div className="purchase-bottom">
              <p>Add To Cart</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          {/* 03: ADJUSTABLE DUMBBELL */}
          <div className="purchase-item">
            <img src="images/purchase3.jpg" alt="Adjustable Dumbbell" />
            <h5>Adjustable Dumbbell</h5>
            <p>89,99$ / 59,00$</p>
            <div className="purchase-bottom">
              <p>Add To Cart</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          {/* 04: KETTLEBELL */}
          <div className="purchase-item">
            <img src="images/purchase4.jpg" alt="Kettlebell 3kg" />
            <h5>Kettlebell / 3kg</h5>
            <p>89,99$ / 59,00$</p>
            <div className="purchase-bottom">
              <p>Add To Cart</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Purchase;
