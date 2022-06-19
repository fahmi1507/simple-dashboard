import React from 'react'
import AveragePurchaseValue from '../average-purchase/AveragePurchaseValue'
import SKUComponent from '../best-selling-sku/SKUComponent'
import DatePickerComponent from '../DatePickerComponent'
import MarketInsight from '../market-insight/MarketInsight'
import SalesTO from '../sales-turnover/SalesTO'
import './dashboard.css'

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
                <div className='dashboard-header-container'>
                    <p>Dashboard</p>
                    <DatePickerComponent/>
                </div>
                
                <MarketInsight/>

                <SalesTO/>

                <div className='dashboard-footer-container'>
                    <AveragePurchaseValue/>
                    <SKUComponent title='best selling' middle/>
                    <SKUComponent title='top competitor'/>
                </div>

        </div>
    )
}

export default Dashboard