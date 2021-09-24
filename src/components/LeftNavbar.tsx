import React, { useEffect, useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom'
import { sidebarData } from '../config/sidebarData';
import './LeftNavbar.css';
import { IconContext } from 'react-icons'
import { useLocation, useHistory } from 'react-router-dom'

const LeftNavbar: React.FC<{}> = (props) => {
    const [sidebar, setSidebar] = useState<Boolean>(false);
    const [inSuccessRoute, setInSuccessRoute] = useState<Boolean>(false);
    const location = useLocation();
    const history = useHistory()

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    useEffect(() => {
        if (location.pathname === '/success') {
            setInSuccessRoute(true);
        } else {
            setInSuccessRoute(false);
        }
    }, [location]);

    return (
        <>
            <IconContext.Provider value={{ color: 'red' }}>
                <div className="navbar">
                    <Link to='#' className='menu-bars' >
                        {inSuccessRoute ? <BsIcons.BsArrowLeft onClick={() => history.goBack()}  className='leftArrow'/> 
                        : <FaIcons.FaBars onClick={showSidebar} /> } 
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                    <ul className='nav-menu-items' onClick={showSidebar} >
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>

                        {sidebarData.map((item, index) => (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>

    )
}

export default LeftNavbar
