import * as React from 'react'
import { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Navbar = () => {

    const [activeNav, setActiveNav] = useState(" Home "); // For ActiveClassName Feature On Navbar
    const [openNav, setOpenNav] = useState(false); // For Changing Box Shadow of Navbar On scroll
    const [hamburger, setHamburger] = useState(false);

    // changeActiveClassName on Click Function
    const changeActiveNav = (e) => {
        let activeInnerHTML = e.target.innerHTML;
        setActiveNav(activeInnerHTML);
    }

    const changeHamburgerDropDown = () => {
        if (!hamburger) {
            setHamburger(true);
        } else {
            setHamburger(false);
        }
    }

    React.useEffect(() => {
        if (window.screen.width < 1040) {
            document.querySelector(".about-inner .left").classList.add("fadeInLeft");
            document.querySelector(".about-inner .right").classList.add("fadeInLeft");
        }

        // On Scroll Nav Box Shadow Function
        const changeNavBoxShadow = () => {
            if (window.scrollY >= 100) {
                setOpenNav(true)
            } else {
                setOpenNav(false)
            }
        }

        // Change ActiveClassName on scroll Function
        const changeActiveClassOnScroll = () => {
            if (window.scrollY < 600) {
                setActiveNav(" Home ")
            } else if (window.scrollY > 600 && window.scrollY < 1400) {
                setActiveNav(" About ")
                document.querySelector(".about-inner .left").classList.add("fadeInLeft");
                document.querySelector(".about-inner .right").classList.add("fadeInLeft");
            } else if (window.scrollY > 1399 && window.scrollY < 3200) {
                setActiveNav(" Portfolio ")
            } else if (window.scrollY > 3177.6 && window.scrollY < 3953) {
                setActiveNav(" Blogs ")
            } else if (window.scrollY > 3953.1) {
                setActiveNav(" Contact ")
            }
        }

        // Animation Appearance on scroll
        const animationAppear = () => {
            if (window.scrollY > 400) {
                document.querySelector(".about-inner .left").classList.add("fadeInLeft");
                document.querySelector(".about-inner .right").classList.add("fadeInLeft");
            }
            if (window.scrollY > 1150) {
                document.querySelector(".portfolio-section").classList.add("fadeInDown")
            }
            if (window.scrollY > 2129) {
                document.querySelector(".portfolio-skills").classList.add("fadeInRight");
            }
            if (window.scrollY > 2923) {
                document.querySelector(".blog-list ul").classList.add("fadeInLeft");
            }
            if (window.scrollY > 3640) {
                document.querySelector(".cta-inner").classList.add("fadeInUp");
            }
        }
        
        window.addEventListener("scroll", () => {
            changeNavBoxShadow();
            changeActiveClassOnScroll();
            animationAppear();
        })
    })

    return (
        <>
            <nav className="navbar-section">
                <div className={openNav ? "navbar-wrapper opened" : "navbar-wrapper"}>
                    <div className="name-div">
                        <a href="/#">
                            <StaticImage
                                src="../images/Lakshay.png"
                                alt="Lakshay Yadav"
                            />
                        </a>

                    </div>
                    <div className="nav-links-menu-div">
                        <ul className="nav-links">
                            <li> <Link to="#Home" className={activeNav === " Home " ? 'active-nav-link' : ''} onClick={(e) => changeActiveNav(e)}> Home </Link> </li>
                            <li> <Link to="#About" className={activeNav === " About " ? 'active-nav-link' : ''} onClick={(e) => changeActiveNav(e)}> About </Link> </li>
                            <li> <Link to="#Portfolio" className={activeNav === " Portfolio " ? 'active-nav-link' : ''} onClick={(e) => changeActiveNav(e)}> Portfolio </Link> </li>
                            <li> <Link to="#Blog" className={activeNav === " Blogs " ? 'active-nav-link' : ''} onClick={(e) => changeActiveNav(e)}> Blogs </Link> </li>
                            <li> <Link to="#Contact" className={activeNav === " Contact " ? 'active-nav-link' : ''} onClick={(e) => changeActiveNav(e)}> Contact </Link> </li>
                        </ul>
                    </div>
                </div>
                <div className="nav-mobile-menu">
                    <div className="container">
                        <div className="topbar-inner">
                            <div className="name-div">
                                <StaticImage
                                    src="../images/Lakshay.png"
                                    alt="Lakshay Yadav"
                                />
                            </div>
                            <div className={hamburger ? "hamburger collapse-active-hamburger" : "hamburger"} onClick={changeHamburgerDropDown} aria-hidden="true">
                                <div className="hamburger-box">
                                    <div className="hamburger-inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={hamburger ? "dropdown active" : "dropdown"}>
                        <span className="close-menu" onClick={changeHamburgerDropDown} aria-hidden="true"> Close </span>
                        <div className="dropdown-inner">
                            <ul className="dropdown-nav-links">
                                <li> <Link to="#Home" onClick={changeHamburgerDropDown}> Home </Link> </li>
                                <li> <Link to="#About" onClick={changeHamburgerDropDown}> About </Link> </li>
                                <li> <Link to="#Portfolio" onClick={changeHamburgerDropDown}> Portfolio </Link> </li>
                                <li> <Link to="#Blog" onClick={changeHamburgerDropDown}> Blogs </Link> </li>
                                <li> <Link to="#Contact" onClick={changeHamburgerDropDown}> Contact </Link> </li>
                            </ul>
                            <div className="social-menu">
                                <ul className="dropdown-social-links">
                                    <li> <a href="https://facebook.com/xxLakshayxx" target="_blank" rel="noopener noreferrer"> <FaFacebookF /></a> </li>
                                    <li> <a href="https://linkedin.com/in/lakshay-yadav" target="_blank" rel="noopener noreferrer"> <FaLinkedinIn /></a> </li>
                                    <li> <a href="https://github.com/Lucky0108" target="_blank" rel="noopener noreferrer"> <FaGithub /></a> </li>
                                    <li> <a href="https://twitter.com/lxkshay" target="_blank" rel="noopener noreferrer"> <FaTwitter /></a> </li>
                                    <li> <a href="https://instagram.com/lakshayy.yyadav" target="_blank" rel="noopener noreferrer"> <FaInstagram /></a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
