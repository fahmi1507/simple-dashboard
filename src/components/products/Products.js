import React from 'react'
import prodCompetitor from '../../img/prod-competitor.png'
import './products.css'
const Products = ({ index, name }) => {
    return (
        <div className={`${index === 0 ? 'headline': ''} sku-top`} >
            <img src={prodCompetitor} alt="prod-competitor" width={index === 0 ? 80 : 60} height={index === 0 ? 80 : 60} />
            <div className='info-produk'>
                <p>{ name }</p>
                <div className="info-terjual">
                    <p>RpXXXX</p>
                    <p>[jml terjual]</p>
                </div>
            </div>
        </div>
    )
}

export default Products