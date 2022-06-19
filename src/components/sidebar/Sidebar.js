import React from 'react'
import './sidebar.css'
import hamburgerMenu from '../../img/hamburger.png'
import dashIcon from '../../img/dashboard-icon.svg'

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='dashboard-icon-container white'>
                <img src={hamburgerMenu} alt="hamburger" width={30} height={27} />

            </div>
            <div className='dashboard-icon-container'>
                <img src={dashIcon} alt="dash" width={24} height={21} />

            </div>

        </div>
    )
}

export default Sidebar