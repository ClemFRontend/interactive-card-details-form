import React from 'react'
import './Cards.css'

/**
 * 
 * return a recto card (or front card) component that contains card number,
 * card name and card expiration date.
 * 
 */
function RectoCard({cardName, cardNumber, expirationDate}) {
    return (
        <div className="recto-card">
            <div className="circles">
                <div className='plain-circle'/>
                <div className='border-circle'/>
            </div>
            <h1>{cardNumber === "" ? "0000 0000 0000 0000" : cardNumber}</h1>
            <div className='recto-card-subcontainer small-info'>
                <p>{cardName === "" ? "Jane Appleseed" : cardName}</p>
                <div className='recto-card-date'>
                    <p>{expirationDate.month === "" ? "00" : expirationDate.month}/{expirationDate.year === "" ? "00" : expirationDate.year}</p>
                </div>
            </div>
        </div>
    )
}

/**
 * 
 * return a verso card (or front card) component that contains CVC
 * 
 */
function VersoCard({cvc}) {
    return (
        <div className="verso-card small-info">
            <p>{cvc === "" ? "000" : cvc}</p>
        </div>
    )
}

export { RectoCard, VersoCard }