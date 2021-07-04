import React, { useState } from 'react'
import './_header.scss';

import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header({handleToggleBar})
{
    const[input, setInput] = useState();
    
    const user = useSelector(state=>state.auth.user)

    const history = useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push(`/search/${input}`);
        setInput('');
    }
    return (
        <div className="header border-block">
            <FaBars
                className="header__menu"
                size={26}
                onClick={()=>handleToggleBar()}
            />
            <img
                src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
                alt="youtube"
                className="header__logo" />
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Search" 
                value={input}
                onChange={
                    (e)=>setInput(e.target.value)}
                />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img
                    src={user?.photoURL}
                    alt=""
                    />
            </div>
        </div>
    )
}

export default Header
