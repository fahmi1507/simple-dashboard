import React, { useState } from 'react';

import DatetimeRangePicker from '@hanabyan/react-bootstrap-datetimerangepicker';
import moment from 'moment';
import calendarImg from '../../img/calendar.png'
import downChevron from '../../img/down-chevron.png'

// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import './calendar.css'
import { config, calendarRanges } from './utils';

const CalendarComponent = ({ calendar, handleChange }) => {
    const [ranges, setRanges] = useState(calendarRanges)

    const handleEvent = (event, picker) => {
        const { startDate, endDate } = picker;

        handleChange(moment(startDate), moment(endDate));
    };
    const { startDate, endDate } = calendar;

    const label = `${startDate.locale('id').format('DD MMM YYYY')} - ${endDate.locale('id').format(
        'DD MMM YYYY',
    )}`;

    return (
        <div >
            <DatetimeRangePicker
                startDate={startDate}
                endDate={endDate}
                ranges={ranges}
                onApply={handleEvent}
                {...config}
            >
                
                <div className='inputBox'>
                    <img src={calendarImg} alt="calendar" width={22} height={22} />
                    <p>Period</p>
                    <span>{label}</span>
                    <img src={downChevron} alt="downChevron" width={14} height={12} />
                </div>
            </DatetimeRangePicker>
        </div>
    )
}

export default CalendarComponent
