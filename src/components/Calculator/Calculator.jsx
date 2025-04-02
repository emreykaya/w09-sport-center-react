import React, { useState, useEffect, useRef } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [position, setPosition] = useState(0);
    const triangleRef = useRef(null);
    const bmiImageRef = useRef(null);

    // BMI CALCULATION FUNCTION
    const calculateBMI = () => {
        const heightValue = parseFloat(height);
        const weightValue = parseFloat(weight);

        // VALUE CONTROL
        if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
            return;
        }

        // UNIT CONVERSION
        const heightInMeters = heightValue / 100;

        // BMI CALCULATION
        const calculatedBMI = weightValue / (heightInMeters * heightInMeters);
        setBmi(calculatedBMI);

        // TRIANGLE POSITION DETERMINATION
        let newPosition = 0;
        if (calculatedBMI < 18.5) {
            newPosition = 0;
        } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
            newPosition = 1;
        } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
            newPosition = 2;
        } else if (calculatedBMI >= 30 && calculatedBMI < 34.9) {
            newPosition = 3;
        } else {
            newPosition = 4;
        }
        setPosition(newPosition);
    };

    // TRIANGLE MOVEMENT FUNCTION
    const moveTriangle = () => {
        if (!bmiImageRef.current || !triangleRef.current) return;

        const imageWidth = bmiImageRef.current.clientWidth;
        const marginLeft = 35;
        const marginRight = -35;
        const usableWidth = imageWidth - marginLeft - marginRight;
        const widthPerCategory = usableWidth / 5;
        const trianglePosition = (position * widthPerCategory) + marginLeft;

        triangleRef.current.style.left = `${trianglePosition}px`;
    };

    // MOVE TRIANGLE WHEN BMI CHANGES
    useEffect(() => {
        if (bmiImageRef.current?.complete) {
            moveTriangle();
        } else {
            bmiImageRef.current?.addEventListener('load', moveTriangle);
            return () => bmiImageRef.current?.removeEventListener('load', moveTriangle);
        }
    }, [position]);

    // CALCULATE BMI WHEN INPUT VALUES CHANGE
    useEffect(() => {
        calculateBMI();
    }, [height, weight]);

    return (
        <section id="calculator">
            <div className="container">
                <div className="calc-container">
                    <div className="calculator-content">
                        {/* TITLE */}
                        <h3 data-aos="fade" data-aos-delay="0">BMI Calculator</h3>

                        {/* TEXT */}
                        <p data-aos="fade" data-aos-delay="100">
                            Your Body Mass Index (BMI) helps you understand if your weight is in a healthy range based on your height. It's a simple tool to set realistic fitness goals and make informed choices.
                        </p>
                        <br/>
                        <p data-aos="fade" data-aos-delay="150">
                            A balanced BMI boosts energy, enhances performance, and reduces health risks. Whether losing weight or building muscle, tracking your BMI is a great first step.
                        </p>
                        <br/>

                        {/* FORM AREA */}
                        <form data-aos="fade" data-aos-delay="200" id="bmi-form">
                            <input 
                                type="number" 
                                id="height" 
                                placeholder="Your Height"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            /> cm 
                            <input 
                                type="number" 
                                id="weight" 
                                placeholder="Your Weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            /> kg 
                        </form>
                    </div>

                    {/* FORM IMAGE */}
                    <div className="image-container">
                        <h5 data-aos="fade" data-aos-delay="0">Your BMI</h5>
                        <img 
                            ref={bmiImageRef}
                            id="bmi-img" 
                            src="images/bmi-index.jpg" 
                            alt=""
                        />
                        <div 
                            ref={triangleRef}
                            id="triangle" 
                            className="triangle"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
