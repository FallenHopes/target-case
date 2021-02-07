import React from 'react'

export const Playgrounds = ({ pl, plHandler }) => {
    return (
    <div className='playgrounds'>
        <h3>Площадки размещения</h3>
        <div className='playgrounds__checkboxes'>
            <div>
                <label>
                    <input 
                        type='checkbox' 
                        checked={pl[0]} 
                        onChange={() => plHandler(0)} 
                    />
                    ВКонтакте
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type='checkbox' 
                        checked={pl[1]} 
                        onChange={() => plHandler(1)}
                    />
                    Instagram
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type='checkbox' 
                        checked={pl[2]} 
                        onChange={() => plHandler(2)}
                    />
                    TikTok
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type='checkbox' 
                        checked={pl[3]} 
                        onChange={() => plHandler(3)}
                    />
                    YouTube
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type='checkbox' 
                        checked={pl[4]} 
                        onChange={() => plHandler(4)}
                    />
                    Telegram
                </label>
            </div>
        </div>
    </div>
)}