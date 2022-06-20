import React from 'react'
import './sales-to.css'
import dots from '../../img/dots.png'
import cart from '../../img/cart.png'
import arrowDown from '../../img/DownArrow.svg'

const SalesTO = () => {
    return (
        <div className='sales-to-container'>
            <div className='sales-to-header'>
                <p>Sales Turnover</p>
                <img src={dots} alt="dots" width={16} height={16} />
            </div>
            <div className='sales-to-header'>
                <div>
                    <h3>Rp3,600,000</h3>
                    <div className='sales-to-header'>
                        <img src={arrowDown} alt="arrow" width={12} height={12} />
                        <p><span style={{color:"#ef563f", fontWeight: '900'}}>13.8%</span> last period in products sold</p>
                    </div>
                </div>
                <img src={cart} alt="cart"width={49} height={43} />
            </div>
        </div>
    )
}

export default React.memo(SalesTO)