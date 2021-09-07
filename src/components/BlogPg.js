import React from 'react'
import Modal from 'react-modal';
import { RiCloseCircleLine } from 'react-icons/ri';

/**
* @author
* @function BlogPg
**/

export const BlogPg = ({ topic, date, open, close, isOpen, children }) => {
    return (
        <li>
            <div className="list-inner">
                <div className="image" onClick={open} aria-hidden="true">
                    <div className="main"></div>
                </div>
                <div className="blog-heading" onClick={open} aria-hidden="true">
                    <h3>{topic}</h3>
                    <p> {date} </p>
                </div>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={close}
                    overlayClassName={"ReactModal__Overlay custom-overlay"}
                    className={"ReactModal__Content custom-modal"}
                    contentLabel="Blog Modal"
                >
                    <div className="blog-modal-content">
                        <button className="close-modal" onClick={close}>
                            <RiCloseCircleLine />
                        </button>
                        <div className="box-inner">
                            <div className="container description-wrap">
                                {children}
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </li>
    )

}