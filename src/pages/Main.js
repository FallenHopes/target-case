import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../context/Context'

export const Main = () => {
    const { campaign } = useContext(Context)
    const [search, setSearch] = useState('')
    const history = useHistory()
    return(
        <div>
            {/* <h1>Таргет-панель</h1> */}
            <div className='d-flex justify-content-between'>
                <div className='compaignTable'>
                    <div className='compaign__search'>
                        <span>Поиск по названию:</span>
                        <input type='text' value={search} onChange={e => setSearch(e.target.value)}/>
                    </div>
                    <div className='compaignTable__head'>
                        <span>Имя кампании</span>
                        <span>Дата начала</span>
                        <span>Дата окончания</span>
                        <span>Количество переходов</span>
                    </div>
                    <div className='compaignTable__list'>
                        {
                            search ?
                            campaign.filter(camp => camp.name.toLowerCase().includes(search.toLowerCase())).map(camp => (
                                <div className='d-flex justify-content-between align-items-center compaignTable__listItem' 
                                    key={camp.id}
                                    onClick={() => history.push(`/campaign/${camp.id}`)}
                                >
                                    <span>{camp.name}</span>
                                    <span>{camp.startDate}</span>
                                    <span>{camp.endDate}</span>
                                    <span>{camp.transitions}</span>
                                </div>
                            ))
                            :
                            campaign.map(camp => (
                                <div className='d-flex justify-content-between align-items-center compaignTable__listItem' 
                                    key={camp.id}
                                    onClick={() => history.push(`/campaign/${camp.id}`)}
                                >
                                    <span>{camp.name}</span>
                                    <span>{camp.startDate}</span>
                                    <span>{camp.endDate}</span>
                                    <span>{camp.transitions}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='mainButtons'>
                    <a href='/newcampaign' className='btn btn-success newCampBtn'>Создать новую рекламную кампанию</a>
                    {/* <a href='/bankclients' className='btn btn-warning clientsBtn'>Клиенты банка</a> */}
                </div>
            </div>
        </div>
    )
}