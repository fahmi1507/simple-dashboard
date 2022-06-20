import React from 'react'
import prodCompetitor from '../../img/prod-competitor.png'
import './products.css'
const Products = ({ index, name }) => {
    const firstItem = index === 0;
    return (
        <div className={`${firstItem ? 'headline': ''} sku-top`} >
            <img src={prodCompetitor} alt="prod-competitor"  />
            <div className={`${firstItem ? 'font-20px': ''} info-produk`}>
                <p>{ name }</p>
                <div className={`${firstItem ? 'font-12px': ''} info-terjual`}>
                    <p>RpXXXX</p>
                    <p>[jml terjual]</p>
                </div>
            </div>
        </div>
    )
}

export default Products