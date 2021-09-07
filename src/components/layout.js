import * as React from 'react';
import Navbar from './Navbar';
import { RiArrowUpSLine } from 'react-icons/ri'
import '../styles/main.css'
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import 'react-tabs/style/react-tabs.css';

const Layout = ({ children }) => {
    const [scrollUp, setScrollUp] = React.useState(false)
    
    React.useEffect(() => {

        const showScrollUp = () => {
            if(window.scrollY >= 600) {
                setScrollUp(true)
            } else {
                setScrollUp(false)
            }
        }
        window.addEventListener("scroll", showScrollUp)
    })

    return (
    <>
    <div className={scrollUp ? "fadeInUp scroll-up" : ""} style={scrollUp ? {display: "flex"} : {display: "none"}}>
       <a href="/#"> <RiArrowUpSLine /></a>
    </div>
    <Navbar />
    <main> {children} </main>
    </>
    )
}

export default Layout