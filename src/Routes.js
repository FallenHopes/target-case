import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Main } from './pages/Main'
import { Campaign } from './pages/Campaign'
import { NewCampaign } from './pages/NewCampaign'
import { BankClients } from './pages/BankClients'
import { ClientBank } from './pages/ClientBank'

export const Routes = () => (
    <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/campaign/:id' component={Campaign} />
        <Route path='/newcampaign' exact component={NewCampaign} />
        <Route path='/bankclients' exact component={BankClients} />
        <Route path='/bankclients/:id' exact component={ClientBank} />
        <Redirect to='/'/>
    </Switch>
)