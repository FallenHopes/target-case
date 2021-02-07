import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/Context'

export const ClientBank = () => {
    const clientId = parseInt(useParams().id)
    const { clients } = useContext(Context)
    const currClient = clients.filter(cl => cl.id === clientId)[0]
    return(
        <div className='clientState'>
            <h1>Сводка: {currClient.name}</h1>
            <h3>Примерная доходность: {currClient.money}</h3>
            <div className='prodBlock'>
                <label htmlFor='products'>Продукты банка:&nbsp;</label>
                <select id='products' name='products'>
                    {
                        currClient.products.length === 0 ?
                        <option value='Продуктов нет'>Продуктов нет</option>
                        :
                        currClient.products.map((prod, idx) => (
                            <option value={prod} key={idx}>{prod}</option>
                        ))
                    }
                </select>
            </div>
            <h3>Количество запросов по продуктам банка в поисковых системах:</h3>
            <div className='searchCount'>{currClient.searches}</div>
            <span>*В режиме реального времени*</span>
            <a href='/bankclients' className='btn btn-primary btnBankBack'>Назад</a>
        </div>
    )
}