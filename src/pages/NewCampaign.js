import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Auditory } from '../components/Auditory'
import { Datepickers } from '../components/Datepickers'
import { Playgrounds } from '../components/Playgrounds'
import { Setter } from '../components/Setter'
import { Context } from '../context/Context'

export const NewCampaign = () => {
    const { setCampaign } = useContext(Context)
    const [camp, setCamp] = useState({
        name: '',
        startDate: '',
        endDate: '',
        transitions: '0',
        success: '0',
        placementSites: [ false, false, false, false, false ],
        audit: [ false, false, false, false, false, false ]
    })
    const history = useHistory()

    const fullChecker = () => {
        if(
            camp.name !== ''
            &&
            camp.startDate !== ''
            &&
            camp.endDate !== ''
            &&
            JSON.stringify(camp.placementSites) !== JSON.stringify([ false, false, false, false, false ])
            &&
            JSON.stringify(camp.audit) !== JSON.stringify([ false, false, false, false, false, false ])
        ) return true
        return false
    }

    const redactChecker = () => {
        const campForCompare = {
            name: '',
            startDate: '',
            endDate: '',
            transitions: '0',
            success: '0',
            placementSites: [ false, false, false, false, false ],
            audit: [ false, false, false, false, false, false ]
        }
        for (let key in campForCompare){
            if (JSON.stringify(campForCompare[key]) !== JSON.stringify(camp[key])){
                return true
            }
        }
        return false
    }

    const dateHandler = targ => {
        if (targ.name === 'date_start') return setCamp(prev => ({ ...prev, startDate: targ.value }))
        setCamp(prev => ({ ...prev, endDate: targ.value }))
    }

    const plHandler = idx => {
        let newPl = []
        camp.placementSites.map((p, i) => {
            if(i === idx) return newPl.push(!p)
            return newPl.push(p)
        })
        setCamp(prev => ({ ...prev, placementSites: newPl }))
    }

    const audHandler = idx => {
        let newAud = []
        camp.audit.map((a, i) => {
            if(i === idx) return newAud.push(!a)
            return newAud.push(a)
        })
        setCamp(prev => ({ ...prev, audit: newAud }))
    }
    
    const costHandler = () => {
        const daysLag = Math.ceil(
            Math.abs(
                new Date(camp.endDate).getTime() - new Date(camp.startDate).getTime()
            ) / (1000 * 3600 * 24)
        );
        const countPlace = camp.placementSites.filter(pl => pl === true).length
        const countAud = camp.audit.filter(a => a === true).length
        return countPlace * 833 * countAud * daysLag || 0
    }

    const showsHandler = () => camp.placementSites.filter(pl => pl === true).length * 833333 * camp.audit.filter(a => a === true).length

    const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))

    return (
        <div className='newcampaign'>
            <h1>Новая кампания{redactChecker() ? '*' : ''}</h1>
            <input 
                className='newcampaign_name' 
                type='text'
                placeholder='Имя кампании'
                value={camp.name}
                onChange={e => setCamp(prev => ({ ...prev, name: e.target.value }))}
                maxLength={35}
            />
            <Datepickers startDate={camp.startDate} endDate={camp.endDate} dateHandler={dateHandler}/>
            <Playgrounds pl={camp.placementSites} plHandler={plHandler}/>
            <Setter />
            <Auditory audit={camp.audit} audHandler={audHandler}/>
            <h2 style={{marginBottom: 20}}>Охват аудитории: {showsHandler()} чел</h2>
            <h3 style={{marginBottom: 40}}>Стоимость кампании: {costHandler()} руб</h3>
            <div className='newcamp_btns'>
                <button 
                    className={
                        fullChecker() ?
                        'btn btn-success'
                        :
                        'btn btn-disabled'
                    }
                    onClick={() => {
                        setCampaign(prev => 
                            prev.concat(
                                [
                                    { ...camp, 
                                        id: Math.floor(Math.random() * 10000000), 
                                        transitions: '' + randomInteger(0, 20000000),
                                        success: '' + randomInteger(0, 10000000)
                                    }
                                ]
                            )
                        )
                        history.push('/')
                    }}
                    disabled={!fullChecker()}
                >Запустить кампанию</button>
                <button 
                    className='btn btn-primary'
                    onClick={() => {
                        if (redactChecker()){
                            if (window.confirm('Имеются не сохранённые данные. Покинуть страницу без сохранения?')){
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
    )
}