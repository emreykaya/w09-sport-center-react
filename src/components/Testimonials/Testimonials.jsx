import React from 'react'
import './Testimonials.css' 

const Testimonials = () => {
  return (
    <section id="testimonials">
    <div className="container">
        <div className="boxes">
            {/* BOX 01 */}
            <div className="box-item">
                <h5>325</h5>
                <p>Course</p>
            </div>
            {/* BOX 02 */}
            <div className="box-item">
                <h5>405</h5>
                <p>Workout</p>
            </div>
            {/* BOX 03 */}
            <div className="box-item">
                <h5>305</h5>
                <p>Working Hour</p>
            </div>
            {/* BOX 04 */}
            <div className="box-item">
                <h5>705</h5>
                <p>Happy Client</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Testimonials
