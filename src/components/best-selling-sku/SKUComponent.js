import React from 'react'
import './sku.css'
import dots from '../../img/dots.png'
import Products from '../products/Products'

const data = [
    {id: 1, name: 'biskuat'},
    {id: 2, name: 'ultra milk'},
    {id: 3, name: 'chacha'},
    {id: 4, name: 'biskuat'},
    {id: 5, name: 'ultra milk'},
    {id: 6, name: 'chacha'},
    {id: 7, name: 'biskuat'},
    {id: 8, name: 'ultra milk'},
    {id: 9, name: 'chacha'},
    {id: 10, name: 'biskuat'},
]

const SKUComponent = ({ title, middle }) => {
    return (
        <div className='sku-container' style={middle && {margin: '0 16px'}}>
            <div className="sku-header-container">
                <p>{title} SKU</p>
                <img src={dots} alt="dots" width={12} height={12} />
            </div>

            <div className='product-container'>
                {
                    data && (
                        data.map((item, i) => <Products key={item.id} index={i} name={item.name}/>)
                    )
                }
            </div>

        </div>
    )
}

export default SKUComponent