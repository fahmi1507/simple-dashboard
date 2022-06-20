import React from 'react'
import './market-insight.css'
import help from '../../img/help.png'
import upArrow from '../../img/up-arrow.png'

const MarketInsight = () => {
    return (
        <div className='market-insight-container'>
            <div className='market-header'>
                <p>MARKET INSIGHTS</p>
                <div className='help-container'>
                    <img src={help} alt="help" width={16} height={16} />
                    <p>Click Here for Help</p>
                    <img src={upArrow} alt="upArrow" width={14} height={12} />
                </div>
            </div>
        </div>
    )
}

export default React.memo(MarketInsight)