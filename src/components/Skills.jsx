import React from 'react';
import { Code, Globe, Database, Cog } from 'lucide-react';

const Skills = () => (
    <section className="skills section" id="skills">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">My technical expertise spans across modern web development technologies and programming languages.</p>
        <div className="skills-container container">
            <div className="skill-card">
                <div className="skill-icon-wrapper blue"><Code size={28} /></div>
                <h3 className="skill-title">Programming</h3>
                <div className="skill-pills"><span>Java</span><span>C</span><span>Python</span><span>DSA</span><span>OOP</span></div>
            </div>
            <div className="skill-card">
                <div className="skill-icon-wrapper purple"><Globe size={28} /></div>
                <h3 className="skill-title">Frontend</h3>
                <div className="skill-pills"><span>HTML</span><span>CSS</span><span>Bootstrap</span><span>React.js</span><span>JavaScript</span></div>
            </div>
            <div className="skill-card">
                <div className="skill-icon-wrapper green"><Database size={28} /></div>
                <h3 className="skill-title">Backend</h3>
                <div className="skill-pills"><span>Java (Spring Boot)</span><span>JSP</span><span>Servlets</span><span>REST APIs</span></div>
            </div>
            <div className="skill-card">
                <div className="skill-icon-wrapper orange"><Cog size={28} /></div>
                <h3 className="skill-title">Tools & Database</h3>
                <div className="skill-pills"><span>MySQL</span><span>STS(Spring tool suite)</span><span>Git</span><span>GitHub</span><span>Eclipse</span></div>
            </div>
        </div>
    </section>
);
export default Skills;