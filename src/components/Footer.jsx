import React from 'react';
import { Mail, Linkedin, Github, Download, Send, Code } from 'lucide-react';

const Footer = () => (
    <footer className="footer" id="contact">
        <div className="footer-container container">
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">
                Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
            </p>

            {/* Contact Links Grid */}
            <div className="contact-grid">
                <a href="mailto:devalacheruvumanasa@gmail.com" className="contact-card">
                    <div className="contact-icon-wrapper red">
                        <Mail size={22} />
                    </div>
                    <div className="contact-text-wrapper">
                        <strong>Email</strong>
                        <span>devalacheruvumanasa@gmail.com</span>
                    </div>
                    <span className="contact-arrow">→</span>
                </a>
                <a href="https://www.linkedin.com/in/manasa-devalacheruvu-38462a304/" target="_blank" rel="noreferrer" className="contact-card">
                    <div className="contact-icon-wrapper blue">
                        <Linkedin size={22} />
                    </div>
                    <div className="contact-text-wrapper">
                        <strong>LinkedIn</strong>
                        <span>Connect with me</span>
                    </div>
                    <span className="contact-arrow">→</span>
                </a>
                <a href="https://github.com/DevalacheruvuManasa" target="_blank" rel="noreferrer" className="contact-card">
                    <div className="contact-icon-wrapper dark">
                        <Github size={22} />
                    </div>
                    <div className="contact-text-wrapper">
                        <strong>GitHub</strong>
                        <span>View my repositories</span>
                    </div>
                    <span className="contact-arrow">→</span>
                </a>
                <a href="https://leetcode.com/u/Devalacheruvu_lakshmimanasa/" target="_blank" rel="noreferrer" className="contact-card">
                    <div className="contact-icon-wrapper orange">
                        <Code size={22} />
                    </div>
                    <div className="contact-text-wrapper">
                        <strong>LeetCode</strong>
                        <span>Check my solutions</span>
                    </div>
                    <span className="contact-arrow">→</span>
                </a>
            </div>

            {/* Call to Action Block */}
            <div className="footer-cta">
                <h3>Ready to Start Your Next Project?</h3>
                <p>
                    I'm currently seeking full-time opportunities and exciting projects. Let's build something incredible together!
                </p>
                <div className="footer-buttons">
                    <a href="https://drive.google.com/file/d/1GWDFzm8gLXuQ_IkNr0KYkhomHlKVdRF7/view" download className="btn btn-light">
                        <Download size={18} /> Download Resume
                    </a>
                    <a href="mailto:devalacheruvumanasa@gmail.com" className="btn btn-transparent">
                        <Send size={18} /> Send Email
                    </a>
                </div>
            </div>

            {/* NEW SECTION */}
            <div className="footer-info-grid">
                <div className="footer-info-item">
                    <h4>Available</h4>
                    <p>For full-time opportunities</p>
                </div>
                <div className="footer-info-item">
                    <h4>Remote</h4>
                    <p>Open to remote work</p>
                </div>
                <div className="footer-info-item">
                    <h4>Flexible</h4>
                    <p>Quick to adapt & learn</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Lakshmi Manasa Devalacheruvu.</p>
            </div>
        </div>
    </footer>
);

export default Footer;