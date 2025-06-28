import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const About = () => (
    <section className="about section" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-container container">
            
            {/* Left Column */}
            <div className="about-left-column">
                <p>
                    I am a passionate and dedicated computer science student with a strong foundation in full-stack development. My journey in technology has been driven by curiosity and the desire to create meaningful solutions through code.
                    <br/><br/>
                    With hands-on experience in the React Js, Spring Boot, and REST APIs, I enjoy building scalable web applications that solve real-world problems. I'm constantly learning new technologies and best practices to stay current with industry trends and deliver high-quality solutions.
                </p>
                <div className="about-stats">
                    <div className="stat-box"><h3>5+</h3><span>Projects Completed</span></div>
                    <div className="stat-box"><h3>3+</h3><span>Months Experience</span></div>
                </div>
            </div>

            {/* Right Column */}
            <div className="about-right-column">
                <h3>Education</h3>
                <div className="education-card">
                    <div className="education-icon-wrapper"><GraduationCap size={20} /></div>
                    <div className="education-content">
                        <h4>B.Tech in Computer Science & Engineering</h4>
                        <p>RGUKT Cuddapah</p>
                        <div className="education-date"><Calendar size={14} /><span>2022 - 2026</span></div>
                    </div>
                    <div className="cgpa-tag green">CGPA: 8.45</div>
                </div>
                <div className="education-card">
                    <div className="education-icon-wrapper"><Award size={20} /></div>
                    <div className="education-content">
                        <h4>Pre-University Course (PUC)</h4>
                        <p>RGUKT Cuddapah</p>
                        <div className="education-date"><Calendar size={14} /><span>2020 - 2022</span></div>
                    </div>
                    <div className="cgpa-tag green">CGPA: 9.4</div>
                </div>
                <div className="education-card">
                    <div className="education-icon-wrapper"><Award size={20} /></div>
                    <div className="education-content">
                        <h4>Secondary School Certificate (SSC)</h4>
                        <p>Sri Chaitanya</p>
                        <div className="education-date"><Calendar size={14} /><span>2019 - 2020</span></div>
                    </div>
                    <div className="cgpa-tag green">CGPA: 10.0</div>
                </div>
            </div>
        </div>
    </section>
);

export default About;