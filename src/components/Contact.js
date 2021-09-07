import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Modal from 'react-modal';
import { RiCloseCircleLine } from 'react-icons/ri';
import { AiOutlineShareAlt, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

Modal.setAppElement('#___gatsby');

const Contact = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <section className="contact-section" id="Contact">
                <div className="contact-bg">
                    <div className="shape">
                        <StaticImage
                            src="../images/paper.svg"
                            alt="Paper Shape"
                        />
                    </div>
                    <div className="overlay"></div>
                    <div className="cta-inner">
                        <div>
                            <h3>Let's work together!</h3>
                        </div>
                        <div>
                            <button className="enquiry-btn" onClick={openModal}>Let's get connected</button>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                overlayClassName={"ReactModal__Overlay custom-overlay"}
                                className={"ReactModal__Content custom-modal"}
                                contentLabel="Example Modal"
                            >
                                <div className="contact-modal-content">
                                    <button className="close-modal" onClick={closeModal}>
                                        <RiCloseCircleLine />
                                    </button>
                                    <div className="box-inner">
                                        <div className="description-wrap">
                                            <h3>Get in touch</h3>
                                            <div className="contact-form-wrap">
                                                <div className="left">
                                                    <form action="https://getform.io/f/5ce77727-ce06-449f-9fc1-2f526e2dd575" method="POST" >
                                                        <input type="text" className="contact-input" placeholder="Your Name" name="name" required/>
                                                        <input type="email" className="contact-input" placeholder="Your Email" name="email" required/>
                                                        <textarea rows="4" className="contact-input" placeholder="Your Message" name="message" style={{resize:"vertical"}} required></textarea>
                                                        <button type="submit" className="contact-submit-btn">Send Message</button>
                                                    </form>
                                                </div>
                                                <div className="right">
                                                <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56003.82693238917!2d77.23198480543262!3d28.68249094376418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb0f509c976f%3A0x9ec1dbe6a1f4fd3c!2sShahdara%2C%20Delhi!5e0!3m2!1sen!2sin!4v1630842451583!5m2!1sen!2sin" width="366.5" height="360" style={{border:"0", width:"100%"}} allowFullScreen="" loading="lazy"></iframe>
                                                </div>
                                            </div>
                                            <div className="short-info">
                                                <ul>
                                                    <li>
                                                        <div className="list-inner">
                                                            <AiOutlineMail />
                                                            <p>
                                                                <a href="mailto:raolakshayyadav02@gmail.com">raolakshayyadav02</a>
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="list-inner">
                                                            <AiOutlinePhone />
                                                            <p>
                                                                <a href="tel:+919891433344">+91 9891433344</a>
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="list-inner">
                                                            <AiOutlineShareAlt />
                                                            <ul className="contact-social">
                                                                <li> <a href="https://facebook.com/xxLakshayxx" target="_blank" rel="noopener noreferrer"> <FaFacebookF /></a> </li>
                                                                <li> <a href="https://linkedin.com/in/lakshay-yadav" target="_blank" rel="noopener noreferrer"> <FaLinkedinIn /></a> </li>
                                                                <li> <a href="https://github.com/Lucky0108" target="_blank" rel="noopener noreferrer"> <FaGithub /></a> </li>
                                                                <li> <a href="https://twitter.com/lxkshay" target="_blank" rel="noopener noreferrer"> <FaTwitter /></a> </li>
                                                                <li> <a href="https://instagram.com/lakshayy.yyadav" target="_blank" rel="noopener noreferrer"> <FaInstagram /></a> </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-section">
                <div className="container">
                    <p>© 2021 by Lakshay Yadav.</p>
                </div>
            </footer>
        </>
    )
}

export default Contact;