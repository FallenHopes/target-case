import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Graph } from './Graph'
import { Context } from '../context/Context'

export const Characters = ({ camp, isRedact }) => {
    const { setCampaign } = useContext(Context)
    const history = useHistory()
    
    const costHandler = () => {
        const daysLag = Math.ceil(
            Math.abs(
                new Date(camp.endDate).getTime() - new Date(camp.startDate).getTime()
            ) / (1000 * 3600 * 24)
        );
        const countPlace = camp.placementSites.filter(pl => pl === true).length
        const countAud = camp.audit.filter(a => a === true).length
        return countPlace * 833 * countAud * daysLag
    }

    const showsHandler = () => camp.placementSites.filter(pl => pl === true).length * 833333 * camp.audit.filter(a => a === true).length
    
    return(
        <div className='characters'>
            <h3>Сводка</h3>
            <div className='characters_content'>
                <Graph shows={showsHandler()} enters={camp.transitions} succeses={camp.success} />
                <div className='characters_panel'>
                    <h4>Стоимость кампании:</h4>
                    <h4>{costHandler()} Р</h4>
                    <div className='characters_panel_btns'>
                        <button 
                            disabled={!isRedact} 
                            className={isRedact ? 'btn btn-success' : 'btn btn-disabled'}
                            onClick={() => setCampaign(prev => prev.filter(p => p.id !== camp.id).concat([camp]))}
                        >Принять изменения</button>
                        <button 
                            onClick={() => {
                            if (window.confirm('Вы действительно хотите прекратить данную кампанию?')){
                                setCampaign(prev => prev.filter(p => p.id !== camp.id))
                                history.push('/')
                            }
                        }} className='btn btn-danger'
                        >Прекратить рекламную кампанию</button>
                        <button 
                            className='btn btn-primary'
                            onClick={() => {
                                if(isRedact){
                                    if(window.confirm('Имеются не сохранённые данные. Покинуть страницу без сохранения?')){
                                        history.push('/')
                                    }
                                }
                                else{
                                    history.push('/')
                                }
                            }}
                        >Назад</button>
                    </div>
                </div>
            </div>
        </div>
    )
}