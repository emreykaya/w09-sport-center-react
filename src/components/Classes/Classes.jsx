import React, { useState, useEffect } from 'react';
import './Classes.css';

const Classes = () => {
    const [activeClass, setActiveClass] = useState('yoga');

    // FUNCTION TO RUN ON PAGE LOAD AND SCREEN SIZE CHANGE
    useEffect(() => {
        const checkScreenSize = () => {
            const containers = document.querySelectorAll('.classes-container');
            containers.forEach(container => {
                container.style.display = 'none';
            });
            
            const activeContainer = document.querySelector(`#${activeClass}`);
            if (activeContainer) {
                activeContainer.style.display = 'flex';
            }
        };

        // RUN ON PAGE LOAD
        checkScreenSize();

        // RUN ON SCREEN SIZE CHANGE
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [activeClass]);

    // CLASS CHANGE FUNCTION
    const handleClassChange = (targetClass) => {
        setActiveClass(targetClass);
    };

    return (
        <section id="classes">
            <div className="container">
                {/* TITLE */}
                <h2 data-aos="fade" data-aos-delay="0">OUR CLASSES</h2>
                <span data-aos="fade" data-aos-delay="0"></span>

                {/* TEXT */}
                <p data-aos="fade" data-aos-delay="100">
                    Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.
                </p>

                {/* CLASSES BUTTONS */}
                <div className="classes-btn-wrapper" data-aos="fade" data-aos-delay="200">
                    <button
                        id="yoga-btn"
                        className={activeClass === 'yoga' ? 'active' : ''}
                        onClick={() => handleClassChange('yoga')}
                    >
                        Yoga
                    </button>
                    <button
                        id="group-btn"
                        className={activeClass === 'group' ? 'active' : ''}
                        onClick={() => handleClassChange('group')}
                    >
                        Group
                    </button>
                    <button
                        id="solo-btn"
                        className={activeClass === 'solo' ? 'active' : ''}
                        onClick={() => handleClassChange('solo')}
                    >
                        Solo
                    </button>
                    <button
                        id="stretching-btn"
                        className={activeClass === 'stretching' ? 'active' : ''}
                        onClick={() => handleClassChange('stretching')}
                    >
                        Stretching
                    </button>
                </div>
            </div>

            {/* CONTENT AREA */}
            <div className="container">
                {/* YOGA */}
                <div
                    id="yoga"
                    className="classes-container"
                    style={{ display: activeClass === 'yoga' ? 'flex' : 'none' }}
                >
                    <div className="content">
                        <div className="content-item">
                            {/* TITLE */}
                            <h3>Why do you do <span>Yoga?</span></h3>
                            {/* TEXT */}
                            <p>Yoga is more than just a physical exercise; it's a pathway to mental clarity and emotional balance. By engaging in yoga, individuals open themselves to deeper awareness, allowing them to reconnect with their inner peace. Whether it's for strength, flexibility, or relaxation, yoga offers a holistic approach to wellness. The practice of yoga helps to release accumulated stress, reduce anxiety, and improve overall well-being. As you move through each pose, your body becomes more aligned with your mind.</p>
                        </div>
                        {/* PROGRAM TEXT */}
                        <div className="content-item">
                            <h3>When comes Yoga Your Time<span>.</span></h3>
                            <p>Saturday-Sunday: 8:00am-10:00pm</p>
                            <p>Monday-Tuesday: 10:00am-12:00pm</p>
                            <p>Saturday-Sunday: 3:00pm-6:00pm</p>
                        </div>
                    </div>
                    <div>
                        <img src="images/yoga.jpg" alt="" />
                    </div>
                </div>

                {/* GROUP */}
                <div
                    id="group"
                    className="classes-container"
                    style={{ display: activeClass === 'group' ? 'flex' : 'none' }}
                >
                    <div className="content">
                        <div className="content-item">
                            {/* TITLE */}
                            <h3>Why should you join our <span>group</span> classes?</h3>
                            {/* TEXT */}
                            <p>Training in a group setting brings energy, motivation, and a sense of community. Whether you're looking to build endurance, improve strength, or simply have fun while working out, our group classes offer a supportive and engaging environment. Exercising with others not only enhances performance but also keeps you accountable, making fitness a more enjoyable journey. Join a class and experience the power of collective movement, where teamwork and encouragement drive you toward your goals.</p>
                        </div>
                        {/* PROGRAM TEXT */}
                        <div className="content-item">
                            <h3>Synchronize Your Energy, Join the Team<span>.</span></h3>
                            <p>Saturday-Sunday: 8:00am-10:00pm</p>
                            <p>Monday-Tuesday: 10:00am-12:00pm</p>
                            <p>Saturday-Sunday: 3:00pm-6:00pm</p>
                        </div>
                    </div>
                    <div>
                        <img src="images/group.webp" alt="" />
                    </div>
                </div>

                {/* SOLO */}
                <div
                    id="solo"
                    className="classes-container"
                    style={{ display: activeClass === 'solo' ? 'flex' : 'none' }}
                >
                    <div className="content">
                        <div className="content-item">
                            {/* TITLE */}
                            <h3><span>Solo</span> for a special program just for you!</h3>
                            {/* TEXT */}
                            <p>For those who prefer a personalized approach, solo training offers complete flexibility and customization. Whether you're focusing on strength training, endurance, or a balanced routine, our expert trainers will guide you through tailored workouts designed to meet your specific needs. Train at your own pace, set your own challenges, and push your limits without distractions. Solo training allows you to develop self-discipline and achieve personal milestones with a focused and intentional mindset.</p>
                        </div>
                        {/* PROGRAM TEXT */}
                        <div className="content-item">
                            <h3>Your Time, Your Workout<span>.</span></h3>
                            <p>Saturday-Sunday: 8:00am-10:00pm</p>
                            <p>Monday-Tuesday: 10:00am-12:00pm</p>
                            <p>Saturday-Sunday: 3:00pm-6:00pm</p>
                        </div>
                    </div>
                    <div>
                        <img src="images/solo.jpg" alt=""/>
                    </div>
                </div>

                {/* STRETCHING */}
                <div
                    id="stretching"
                    className="classes-container"
                    style={{ display: activeClass === 'stretching' ? 'flex' : 'none' }}
                >
                    <div className="content">
                        <div className="content-item">
                            {/* TITLE */}
                            <h3>Unlock Your Body's Full Potential with <span>Stretching</span></h3>
                            {/* TEXT */}
                            <p>Stretching is an essential yet often overlooked component of fitness. It enhances flexibility, reduces muscle stiffness, and promotes better mobility, ensuring that your body stays agile and injury-free. Whether incorporated as a warm-up, cool-down, or a dedicated session, stretching helps improve posture, relieve tension, and support overall physical performance. By making stretching a regular practice, you create a foundation for long-term movement efficiency and physical well-being.</p>
                        </div>
                        {/* PROGRAM TEXT */}
                        <div className="content-item">
                            <h3>Flexible Hours for a Flexible You<span>.</span></h3>
                            <p>Saturday-Sunday: 8:00am-10:00pm</p>
                            <p>Monday-Tuesday: 10:00am-12:00pm</p>
                            <p>Saturday-Sunday: 3:00pm-6:00pm</p>
                        </div>
                    </div>
                    <div>
                        <img src="images/stret.webp" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Classes;
