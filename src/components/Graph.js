import React from 'react'

export const Graph = ({ shows, enters, succeses }) => (
    <div className='graph'>
        <div className='graph_scale'>
            <span style={{bottom: 38}}>5000000 --</span>
            <span style={{bottom: 88}}>10000000 --</span>
            <span style={{bottom: 138}}>15000000 --</span>
            <span style={{bottom: 188}}>20000000 --</span>
            <span style={{bottom: 238}}>25000000 --</span>
        </div>
        <div className='graph_shows' style={{height: shows/100000}}>
            <span>{shows}</span>
            <p>Охват аудитории</p>
        </div>
        <div className='graph_enters' style={{height: enters/100000}}>
            <span>{enters}</span>
            <p>Количество переходов</p>
        </div>
        <div className='graph_succeses' style={{height: succeses/100000}}>
            <span>{succeses}</span>
            <p>Количество успешных сделок</p>
        </div>
    </div>
)
