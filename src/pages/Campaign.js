import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/Context'
import { Playgrounds } from '../components/Playgrounds'
import { Datepickers } from '../components/Datepickers'
import { Setter } from '../components/Setter'
import { Characters } from '../components/Characters'
import { Auditory } from '../components/Auditory'

export const Campaign = () => {
    const campaignId = parseInt(useParams().id)
    const { campaign } = useContext(Context)
    const [curr, setCurr] = useState(campaign.filter(c => c.id === campaignId)[0])

    const redactChecker = () => {
        const campForCompare = campaign.filter(c => c.id === campaignId)[0]
        for (let key in campForCompare){
            if (JSON.stringify(campForCompare[key]) !== JSON.stringify(curr[key])){
                return true
            }
        }
        return false
    }

    const dateHandler = targ => {
        if (targ.name === 'date_start') return setCurr(prev => ({ ...prev, startDate: targ.value }))
        setCurr(prev => ({ ...prev, endDate: targ.value }))
    }

    const plHandler = idx => {
        let newPl = []
        curr.placementSites.map((p, i) => {
            if(i === idx) return newPl.push(!p)
            return newPl.push(p)
        })
        setCurr({ ...curr, placementSites: newPl })
    }

    const audHandler = idx => {
        let newAud = []
        curr.audit.map((a, i) => {
            if(i === idx) return newAud.push(!a)
            return newAud.push(a)
        })
        setCurr(prev => ({ ...prev, audit: newAud }))
    }

    return(
        <div className='campaign'>
             <div className='campaign__header'>
                 <h1>Кампания &lt;</h1>
                 <input type='text' 
                        value={curr.name} 
                        onChange={e => {
                            setCurr(prev => ({ ...prev, name: e.target.value }))
                            e.target.style.width = ((e.target.value.length + 1) * 22) + 'px'
                        }}
                        style={{width: ((curr.name.length + 1) * 23 ) + 'px'}}
                        maxLength={35}
                        />
                {
                    redactChecker() ?
                    <h1>&gt;*</h1>
                    :
                    <h1>&gt;</h1>
                } 
             </div>
             <Datepickers startDate={curr.startDate} endDate={curr.endDate} dateHandler={dateHandler}/>
             <Playgrounds pl={curr.placementSites} plHandler={plHandler}/>
             <Setter />
             <Auditory audit={curr.audit} audHandler={audHandler}/>
             <Characters camp={curr} isRedact={redactChecker()}/>
        </div>
    )
}