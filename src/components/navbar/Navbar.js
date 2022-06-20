import React from 'react'
import './navbar.css'
import logo from '../../img/logo.jpg'
import profileImg from '../../img/Profile.svg'
import logoutImg from '../../img/logout.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <div className='logo-container'>
                    <img src={logo} alt="logo" width={129} height={32}  />
                    <p>powered by</p>
                    <img src={logo} alt="logo" width={72} height={18}  />

                </div>
                <div className='user-info'>
                    <div className='user'>
                        <p className='username'>Username</p>
                        <p>Company Name</p>
                    </div>
                    <img src={profileImg} alt="profile" width={32} height={32} />
                    <img src={logoutImg} alt="logout" width={15} height={15} />

                </div>
            </div>
        </nav>
    )
}

export default Navbar