import React from 'react';
import { Award, Calendar, KeyRound } from 'lucide-react';

const Certifications = () => (
    <section className="certifications section" id="certifications">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
            Continuous learning and professional development achievements.
        </p>
        <div className="certifications-container container">
            <div className="certification-card">
                <div className="cert-header">
                    <div className="cert-header-icon">
                        <Award size={28} />
                    </div>
                    <div className="cert-header-text">
                        <h3>Full Stack Developer</h3>
                        <p>StudyComrade</p>
                    </div>
                    <div className="cert-date-tag">
                        <Calendar size={16} /> 2024
                    </div>
                </div>
                <div className="cert-body">
                    <p>
                        Comprehensive certification covering modern web development technologies including frontend frameworks, backend development, database management, and deployment strategies.
                    </p>

                    <h4><KeyRound size={20} /> Skills & Technologies Covered</h4>
                    
                    <div className="cert-skills">
                        <div className="cert-skills-item">React.js & Modern JavaScript</div>
                        <div className="cert-skills-item">Java & Spring Boot</div>
                        <div className="cert-skills-item">Database Design & Management</div>
                        <div className="cert-skills-item">RESTful API Development</div>
                        <div className="cert-skills-item">Version Control with Git</div>
                        <div className="cert-skills-item">Deployments</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Certifications;