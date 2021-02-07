import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../context/Context'

export const BankClients = () => {
    const { clients } = useContext(Context)
    const history = useHistory()
    return (
        <div>
            <h1>Клиенты банка</h1>
            <ul className='clientsList'>
                {
                    clients.map(client => (
                        <li key={client.id} 
                        onClick={() => history.push(`/bankclients/${client.id}`)}
                        >
                            {client.name}
                        </li>
                    ))
                }
            </ul>
            <a href='/' className='btn btn-primary btnBankBack'>Назад</a>
        </div>
    )
}