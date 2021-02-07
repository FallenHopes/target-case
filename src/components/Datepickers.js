import React from 'react'

export const Datepickers = ({ startDate, endDate, dateHandler }) => {
    return (
        <div className='datepickers'>
            <div className='datepickers__start'>
                <span>Дата начала кампании</span> <br />
                <input type='date' name='date_start' value={startDate} onChange={e => dateHandler(e.target)}/>
            </div>
            <div className='datepickers__end'>
                <span>Дата окончания кампании</span> <br />
                <input type='date' name='date_end' value={endDate} onChange={e => dateHandler(e.target)}/>
            </div>
        </div>
    )
}