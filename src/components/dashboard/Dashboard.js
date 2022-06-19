import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { someEvent } from '../../mock-http'
import AveragePurchaseValue from '../average-purchase/AveragePurchaseValue'
import SKUComponent from '../best-selling-sku/SKUComponent'
import CalendarComponent from '../calendar/CalendarComponent'
import MarketInsight from '../market-insight/MarketInsight'
import SalesTO from '../sales-turnover/SalesTO'
import './dashboard.css'

const Dashboard = () => {
    useEffect(() => {
        someEvent()
    }, [])
    const [calendar, setCalendar] = useState({
        startDate: moment().subtract(7, 'days'),
        endDate: moment().subtract(1, 'days'),
    })

    const handleChange = (start, end) => {
        setCalendar({
            startDate: start,
            endDate: end
        })
    }
    return (
        <div className='dashboard-container'>
                <div className='dashboard-header-container'>
                    <p>Dashboard</p>
                    <CalendarComponent
                        calendar={calendar}
                        handleChange={handleChange}
                    />
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