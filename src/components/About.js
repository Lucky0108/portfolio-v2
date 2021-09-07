import * as React from 'react';
import resume from '../images/resume.pdf';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
    return (
        <section className="about-section" id="About">
            <div className="container">
                <div className="about-inner">
                    <div className="left">
                        <div className="image">
                            <StaticImage
                                src="../images/profile.png"
                                alt="About Placeholder"
                            />
                        </div>
                    </div>
                    <div className="right">
                        <div className="">
                            <span>About Me</span>
                            <h3>MERN Stack Web Developer based in Delhi, India</h3>
                        </div>
                        <div className="text">
                            <p>
                                I'm web developer, and I'm very dedicated and passoniate towards my work. 
                                Being a self-taught web developer and having the experience of making projects, I have acquired the knowledge and skills necessary to make your project a success. 
                                I enjoy every step of the building a website, from discussion and collaboration.
                            </p>
                        </div>
                        <div className="resume-button">
                            <a href={resume} download="Lakshay-Resume" >Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;