import React, { useState } from 'react'

import './scss/flip-card.scss'

export const FlipCard = ({ frontCard, backCard }) => {
    const [flipCard, setFlipCard] = useState(false)
    const handleFlipCard = () => {
        setFlipCard(!flipCard)
    }

    return (
        <div className='flip-card' onClick={handleFlipCard}>
            <div
                className={`flip-card__front flex flex-col justify-center items-center rounded-xl shadow border border-gray-100 p-4 ${
                    flipCard ? 'visible' : ''
                }`}
            >
                {frontCard}
            </div>
            <div
                className={`flip-card__back flex flex-col justify-center items-center rounded-xl shadow border border-gray-100 p-4 ${
                    flipCard ? '' : 'visible'
                }`}
            >
                {backCard}
            </div>
        </div>
    )
}

export default FlipCard
