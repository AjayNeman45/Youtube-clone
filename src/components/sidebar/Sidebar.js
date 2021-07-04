import React from 'react'
import './_sidebar.scss';
import { useDispatch } from 'react-redux';

import
{
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdHome,
    MdSentimentDissatisfied,
    MdLibraryBooks,
}
    from 'react-icons/md';
import { Link } from 'react-router-dom'
import { logout } from '../../redux/actions/auth.action';

function Sidebar({ sidebar, handleToggleBar })
{
    const dispatch = useDispatch();
    const logoutHandler = () =>
    {
        dispatch(logout())
    }

    return (
        <nav
            className={sidebar ? "sidebar open " : "sidebar"}
            onClick={() => handleToggleBar(false)}
        >
            <Link style={{ textDecoration: 'none', color: '#b1bde4' }} to='/'>
                <li>
                    <MdHome size={23} />
                    <span>Home</span>
                </li>
            </Link>

            <Link style={{ textDecoration: 'none', color: '#b1bde4' }} to='/feed/subscriptions'>
                <li>
                    <MdSubscriptions size={23} />
                    <span>Subscriptions</span>
                </li>
            </Link>

            <li>
                <MdThumbUp size={23} />
                <span>Liked Video</span>
            </li>

            <li>
                <MdHistory size={23} />
                <span>History</span>
            </li>
            <li>
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23} />
                <span>I don't know</span>
            </li>
            <hr />
            <li onClick={logoutHandler}>
                <MdExitToApp size={23} />
                <span>Log Out</span>
            </li>
            <hr />
        </nav>
    )
}

export default Sidebar
