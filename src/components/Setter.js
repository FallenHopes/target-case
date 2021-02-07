import React from 'react'
import inLogo from '../img/in.png'
import alignLogo from '../img/align.png'

export const Setter = () => {
    return (
        <div className='setter'>
            <h3>Настройка объявления</h3>
            <div className='setter_frame'>
                <div className='setter_content'>

                </div>
                <div className='setter_panel'>
                    <img 
                        src={inLogo} 
                        className='setter_panel_logo' 
                        title='Прикрепить фото' 
                        alt='Прикрепить фото' 
                    />
                    <img 
                        src={alignLogo} 
                        className='setter_panel_logo' 
                        alt='Изменить выравнивание'
                        title='Изменить выравнивание'    
                    />
                </div>
            </div>
        </div>
    )
}