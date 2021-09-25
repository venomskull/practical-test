import React, { useEffect, useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom'
import { sidebarData } from '../config/sidebarData';
import './LeftNavbar.css';
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
            <div className="navbar">
                <Link to='#' className='menu-bars' >
                    {inSuccessRoute ? <BsIcons.BsArrowLeft onClick={() => history.goBack()} className='leftArrow' />
                        : <FaIcons.FaBars onClick={showSidebar} />}
                </Link>
                <img src="data:image/png;base64,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" alt=""
                    className='logo'
                />
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
        </>

    )
}

export default LeftNavbar
