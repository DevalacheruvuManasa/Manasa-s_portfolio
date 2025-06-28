import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const timelineSteps = [
    { number: 1, title: "Started Internship", date: "September 2024 - Onboarding and initial training" },
    { number: 2, title: "Active Development", date: "Oct 2024 - Contributing to core projects and features" },
    { number: 3, title: "Successful Completion", date: "November 2024 - Project delivery and knowledge transfer" },
];

const Experience = () => (
    <section className="experience section" id="experience">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
            Building real-world solutions and gaining valuable industry experience.
        </p>
        <div className="experience-container container">
            <div className="experience-card">
                <div className="experience-header">
                    <div className="experience-header-icon">
                        <Briefcase size={24} />
                    </div>
                    <div className="experience-header-text">
                        <h3>Full Stack Developer Intern</h3>
                        <div className="experience-meta">
                            <span><MapPin size={14} /> MilkNMore</span>
                            <span><MapPin size={14} /> Remote</span>
                        </div>
                    </div>
                    <div className="experience-date-tag">
                        <Calendar size={16} /><span>September 2024 - November 2024</span>
                    </div>
                </div>
                <div className="experience-body">
                    <p>
                        Contributed to a dynamic startup environment focused on developing innovative solutions in the food-tech industry.
                    </p>

                    <h4><span className="icon-wrapper green"><CheckCircle size={16}/></span> Key Achievements & Responsibilities</h4>
                    <ul>
                        <li>Built responsive and interactive UI components using ReactJS, improving user engagement by 25%.</li>
                        <li>Collaborated effectively with cross-functional teams on the MERN-based Borrow App development.</li>
                        <li>Participated in creating comprehensive High-Level Design (HLD) and Low-Level Design (LLD) documentation.</li>
                        <li>Successfully integrated multiple APIs, ensuring seamless data flow between frontend and backend.</li>
                        <li>Actively participated in agile sprints, daily standups, and bi-weekly sprint reviews.</li>
                        <li>Contributed to code reviews and maintained coding standards across the development team.</li>
                    </ul>

                    <h4>Technologies & Tools</h4>
                    <div className="experience-tech">
                        <span>React.js</span>
                        <span>JavaScript</span>
                        <span>Git</span>
                    </div>

                    <div className="experience-timeline">
                        <h4>Experience Timeline</h4>
                        <div className="timeline-wrapper">
                            {timelineSteps.map((step, index) => (
                                <div key={step.number} className="timeline-item">
                                    <div className="timeline-dot-connector">
                                        <div className="timeline-dot">{step.number}</div>
                                        {index < timelineSteps.length - 1 && <div className="timeline-connector"></div>}
                                    </div>
                                    <div className="timeline-content">
                                        <h5>{step.title}</h5>
                                        <p>{step.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Experience;