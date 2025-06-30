import React from 'react';
import { Download, ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';

const Home = () => (
    <section className="home section" id="home">
        <div className="home-container container">
            <div className="logo-circle">LM</div>
            
            <div className="hero-name-group">
                <h1>Lakshmi Manasa</h1>
                <h2>Devalacheruvu</h2>
            </div>
            
            <p className="home-tagline">Turning ideas into code with passion and precision</p>
            <p className="home-subtitle-description">Aspiring Full Stack Developer | B.Tech CSE @ RGUKT Cuddapah</p>

            <div className="home-buttons">
                <a href="https://drive.google.com/file/d/1_r0jSx44IEx3z2hDSsuQ1Gc2NbYN22t0/view" download className="btn btn-primary">
                    <Download size={18} /> Download Resume
                </a>
                <a href="#contact" className="btn btn-secondary">
                    Get In Touch
                </a>
            </div>
            
            <div className="home-socials">
                <a href="https://github.com/DevalacheruvuManasa" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="social-link">
                    <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/manasa-devalacheruvu-38462a304/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="social-link">
                    <Linkedin size={20} />
                </a>
                <a href="https://leetcode.com/u/Devalacheruvu_lakshmimanasa/" target="_blank" rel="noreferrer" aria-label="LeetCode" title="LeetCode" className="social-link">
                    <ExternalLink size={20} />
                </a>
            </div>
        </div>
    </section>
);

export default Home;