import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './Routes'
import { Context } from './context/Context'

function App() {
  const [campaign, setCampaign] = useState([
    {
      id: 0,
      name: 'Стартовая кампания',
      startDate: '2020-12-01',
      endDate: '2021-01-30',
      transitions: '5543323',
      success: '3343432',
      placementSites: [ true, true, false, false, false ],
      audit: [ true, false, false, false, false, false ]
    },
    {
      id: 1,
      name: 'Дополнительная кампания',
      startDate: '2020-12-30',
      endDate: '2021-02-01',
      transitions: '6994857',
      success: '4232123',
      placementSites: [ true, true, false, false, true ],
      audit: [ false, true, false, true, false, false ]
    },
    {
      id: 2,
      name: 'Нищяя кампания',
      startDate: '2021-01-10',
      endDate: '2021-01-30',
      transitions: '0',
      success: '0',
      placementSites: [ false, false, false, true, false ],
      audit: [ false, false, true, false, false, true ]
    },
    {
      id: 3,
      name: 'Прогоревшая кампания',
      startDate: '2020-11-01',
      endDate: '2020-11-30',
      transitions: '190123',
      success: '500',
      placementSites: [ false, true, false, false, false ],
      audit: [ false, true, false, false, true, true ]
    },
    {
      id: 4,
      name: 'Кампания босса',
      startDate: '2020-12-11',
      endDate: '2021-02-21',
      transitions: '10892736',
      success: '5928374',
      placementSites: [ true, true, true, true, true ],
      audit: [ true, true, true, true, true, true ]
    },
    {
      id: 5,
      name: 'Тренировочная кампания',
      startDate: '2021-01-01',
      endDate: '2021-01-10',
      transitions: '5492',
      success: '1',
      placementSites: [ true, false, false, false, false ],
      audit: [ true, false, true, false, true, true ]
    },
  ])
  const [clients] = useState([
    {
      id: 0,
      name: 'Серебров Владислав Дмитриевич',
      money: '50 000 р',
      products: [],
      searches: 120
    },
    {
      id: 1,
      name: 'Иванов Иван Иванович',
      money: '30 000 р',
      products: ['Кредит 13,5%', 'Кредит на телефон'],
      searches: 0
    },
    {
      id: 2,
      name: 'Игорев Игорь Игоревич',
      money: '100 000 р',
      products: ['Ипотека 12%'],
      searches: 10
    },
    {
      id: 3,
      name: 'Витальев Виталий Витальевич',
      money: '500 000 р',
      products: [],
      searches: 0
    },
    {
      id: 4,
      name: 'Семёнов Семён Семёнович',
      money: '1 500 000 р',
      products: ['Кредит 13,5%'],
      searches: 10
    }
  ])
  const routes = Routes()

  return (
    <Context.Provider value={{ campaign, clients, setCampaign }}>
      <div className='container'>
        <Router>
          { routes }
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
