import React, { useState } from 'react';
import '../views/Lessons.css'
import Card from 'antd/es/card/Card';
const Lessons = () => {

    return (
        <div className="container">
            <Card className="card-container">
                <div className="title">Photographing Shapes and Patterns in Nature</div>
                <div className="description">Photography, especially photographing shapes and patterns, can be a great learning and assessment tool for capturing observations, documenting experiments, and revealing student understanding.</div>
                <div className="graph">
                    <a>https://kidsgardening.org/resources/lesson-plan-photographing-shapes-and-patterns-in-nature/</a>
                </div>
            </Card>
            <Card className="card-container">
                <div className="title">Grow Your Own Herbal Tea</div>
                <div className="description">This lesson provides ideas for introducing students to herbs by crafting their own herbal teas.</div>
                <div className="graph">
                    <a>https://kidsgardening.org/resources/lesson-plans-grow-your-own-herbal-tea/</a>
                </div>
            </Card><Card className="card-container">
                <div className="title">Insect Safari</div>
                <div className="description">Gardens usually have more insect inhabitants than plants. In this lesson, students sharpen their observation skills by going on an insect safari to uncover the secret lives of these important garden residents.</div>
                <div className="graph">
                    <a>https://kidsgardening.org/resources/lesson-plans-insect-safari/</a>
                </div>
            </Card>
        </div>
    );
};
export default Lessons;
