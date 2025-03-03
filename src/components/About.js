import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaHeart } from "react-icons/fa";
import { Github, Linkedin } from 'lucide-react';
import { about } from '../data/data';
import './About.css';

const About = () => {
    const {title, description, meInfo, github, linkedin} = about;


    return (
        <section className='about' id='about'>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <div className='about-links'>
                <h2>{meInfo}</h2>
                <a href={github} target='_blank' rel="noreferrer">
                    <Github className='icon' size={25} />
                </a>
                <a href={linkedin} target='_blank' rel="noreferrer">
                    <Linkedin className='icon' size={25} />
                </a>
            </div>
            
        </section>
    );
};

export default About;