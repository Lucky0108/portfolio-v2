import * as React from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Home = () => {
    return (
        <section className="hero-section" id="Home">
            <div className="background">
                <div className="image"></div>
            </div>
            <div className="container">
                <div className="content">
                    <div className="name-wrap">
                        <h3>
                            <span>Lakshay </span>
                            <br />
                            Yadav
                            <span className="overlay-effect"></span>
                        </h3>
                    </div>
                    <div className="work-wrap">
                        <span className="work">
                            Web Developer
                            <span className="overlay-effect"></span>
                        </span>
                    </div>
                    <ul className="dropdown-social-links">
                        <li> <a href="https://facebook.com/xxLakshayxx" target="_blank" rel="noopener noreferrer"> <FaFacebookF /></a> </li>
                        <li> <a href="https://linkedin.com/in/lakshay-yadav" target="_blank" rel="noopener noreferrer"> <FaLinkedinIn /></a> </li>
                        <li> <a href="https://github.com/Lucky0108" target="_blank" rel="noopener noreferrer"> <FaGithub /></a> </li>
                        <li> <a href="https://twitter.com/lxkshay" target="_blank" rel="noopener noreferrer"> <FaTwitter /></a> </li>
                        <li> <a href="https://instagram.com/lakshayy.yyadav" target="_blank" rel="noopener noreferrer"> <FaInstagram /></a> </li>
                    </ul>
                </div>
                <div className="load-ball">
                    <div className="ball"></div>
                </div>
            </div>
        </section>
    )
}

export default Home;