import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
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
                    <FaGithub className='icon' size={30} />
                </a>
                <a href={linkedin} target='_blank' rel="noreferrer">
                    <FaLinkedinIn className='icon' size={30} />
                </a>
            </div>
        </section>
    );
};

export default About;