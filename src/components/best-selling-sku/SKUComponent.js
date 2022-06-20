import React from 'react'
import './sku.css'
import dots from '../../img/dots.png'
import Products from '../products/Products'

const data = [
    {id: 1, name: '[Nama Produk]'},
    {id: 2, name: '[Nama Produk]'},
    {id: 3, name: '[Nama Produk]'},
    {id: 4, name: '[Nama Produk]'},
    {id: 5, name: '[Nama Produk]'},
    {id: 6, name: '[Nama Produk]'},
    {id: 7, name: '[Nama Produk]'},
    {id: 8, name: '[Nama Produk]'},
    {id: 9, name: '[Nama Produk]'},
    {id: 10, name: '[Nama Produk]'},
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
};

export default React.memo(SKUComponent);