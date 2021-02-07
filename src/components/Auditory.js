import React from 'react'

export const Auditory = ({ audit, audHandler }) => {
    return(
        <div className='auditory'>
            <h3>Аудитория</h3>
            <div className='auditory_checks'>
                <div className='auditory_checks_prof'>
                    <span>Доходность</span>
                    <label>
                        <input 
                            type='checkbox' 
                            checked={audit[0]}
                            onChange={() => audHandler(0)}
                        />
                    Высокая
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            checked={audit[1]} 
                            onChange={() => audHandler(1)}
                        />
                    Низкая
                    </label>
                </div>
                <div className='auditory_checks_avial'>
                    <span>Наличие продуктов</span>
                    <label>
                        <input 
                            type='checkbox'
                            checked={audit[2]}
                            onChange={() => audHandler(2)}
                        />
                    Имеются у клиентов
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            checked={audit[3]}
                            onChange={() => audHandler(3)}
                        />
                    Не имеются у клиентов
                    </label>
                </div>
                <div className='auditory_checks_interest'>
                    <span>Заинтересованность</span>
                    <label>
                        <input 
                            type='checkbox'
                            checked={audit[4]}
                            onChange={() => audHandler(4)}
                        />
                    Клиент заинтересован
                    </label>
                    <label>
                        <input 
                            type='checkbox'
                            checked={audit[5]}
                            onChange={() => audHandler(5)}
                        />
                    Клиент не заинтересован
                    </label>
                </div>
            </div>
        </div>
    )
}