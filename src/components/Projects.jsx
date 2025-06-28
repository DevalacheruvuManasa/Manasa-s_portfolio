import React from 'react';
import { ArrowRight, Code } from 'lucide-react';
import expenseTrackerImg from '../assets/expense-tracker.jpg';
import studentApiImg from '../assets/student-api.jpg';

const Projects = () => (
    <section className="projects section" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Showcasing my development skills through real-world applications and innovative solutions.</p>
        <div className="projects-container container">
            <div className="project-card">
                <div className="project-data">
                    <h3>Expense Tracker</h3>
                    <p>A comprehensive full-stack web application designed to help users track their expenses and incomes calculation logic. Features user authentication, real-time data updates, and intuitive dashboard analytics.</p>
                    <h4><Code size={20}/> Key Features</h4>
                    <ul>
                        <li>User Authentication & Authorization</li>
                        <li>Real-time Expense Tracking</li>
                        <li>Interactive Dashboard with Charts</li>
                    </ul>
                    <h4>Technology Stack</h4>
                    <div className="project-tech"><span>React.js</span><span>Java</span><span>MySQL</span><span>Spring Boot</span><span>CSS</span></div>
                    <a href="https://github.com/DevalacheruvuManasa/Expense_Tracker" className="btn-dark">View Code</a>
                </div>
                <div className="project-img-wrapper"><img src={expenseTrackerImg} alt="Expense Tracker"/></div>
            </div>
            <div className="project-card">
                <div className="project-data">
                    <h3>Student Management API</h3>
                    <p>A robust RESTful API built with Spring Boot and MySQL for comprehensive student data management. Implements full CRUD operations with advanced search capabilities and data validation.</p>
                    <h4><Code size={20}/> Key Features</h4>
                    <ul>
                        <li>Complete CRUD Operations</li>
                        <li>RESTful API Design Principles</li>
                        <li>Database Optimization</li>
                    </ul>
                    <h4>Technology Stack</h4>
                    <div className="project-tech"><span>Spring Boot</span><span>MySQL</span><span>REST API</span><span>Java</span><span>JPA</span></div>
                    <a href="https://github.com/DevalacheruvuManasa/Student-Management-API" className="btn-dark">View Code</a>
                </div>
                <div className="project-img-wrapper"><img src={studentApiImg} alt="Student Management API"/></div>
            </div>
        </div>
        <div className="view-all-projects"><a href="https://github.com/DevalacheruvuManasa" className="btn btn-secondary">View All Projects on GitHub <ArrowRight size={16}/></a></div>
    </section>
);
export default Projects;