import React, { useRef, useState, useEffect } from 'react'
import { DateRangePicker } from 'react-date-range'
import format from 'date-fns/format'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { addDays } from 'date-fns'
import { id } from 'date-fns/esm/locale'
import calendarImg from '../img/calendar.png'
import downChevron from '../img/down-chevron.png'

const DatePickerComponent = () => {
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        document.addEventListener('keydown', hideOnEscape, true)
        document.addEventListener('click', hideOnClickOutside, true)
    }, [])

    const refOutside = useRef(null)

    const hideOnEscape = e => e.key === 'Escape' ? setOpen(false) : null;

    const hideOnClickOutside = (e) => {
        if (refOutside.current && !refOutside.current.contains(e.target)) setOpen(false)
    }

    return (
        <div className='calendarWrap'>
            <div className='inputBox' onClick={() => setOpen(!open)}>
                <img src={calendarImg} alt="calendarImg" width={22} height={22} />
                <p>Period</p>
                <input
                    value={`${format(range[0].startDate, 'dd MMMM yyyy', {locale: id})} - ${format(range[0].endDate, 'dd MMMM yyyy', {locale: id})}`}
                    
                    readOnly
                    type='text'
                />
                <img src={downChevron} alt="downChevron" width={14} height={12} />

            </div>

            <div ref={refOutside}>
                {
                    open && (
                        <DateRangePicker
                            onChange={item => setRange([item.selection])}
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            ranges={range}
                            months={2}
                            direction="horizontal"
                            className="calendarElement"
                            rangeColors={['#37B04C', '#37B04C', '#37B04C']}
                        />
                    )
                }
            </div>

        </div>
    )
}

export default DatePickerComponent