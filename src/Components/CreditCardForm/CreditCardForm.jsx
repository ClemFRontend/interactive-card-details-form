import React, { useState } from 'react'
import './CreditCardForm.css'

const inputs = [
    {
        name: "cardname",
        label: "cardholder name",
        type: "text",
        maxLength: 50,
        placeholder: "e.g. Jane Appleseed",
        required: true,
    },
    {
        name: "cardnumber",
        label: "Card number",
        type: "tel",
        placeholder: "e.g. 1234 5678 9123 0000",
        errorMessage: "Wrong format, numbers only",
        required: true,
    },
    {
        name: "expirationdatemonth",
        label: "Exp date (MM/YY)",
        type: "tel",
        maxLength: 2,
        placeholder: "MM",
        errorMessage: "Wrong format, numbers only",
        // pattern: "[0-9]{2}",
        required: true,
    },
    {
        name: "expirationdateyear",
        label: "",
        type: "tel",
        maxLength: 2,
        placeholder: "e.g. YY",
        errorMessage: "Wrong format, numbers only",
        pattern: "[0-9]{2}",
        required: true,
    },
    {
        name: "cvc",
        label: "cvc",
        type: "tel",
        maxLength: 3,
        placeholder: "e.g. 123",
        errorMessage: "Wrong format, numbers only",
        required: true,
        pattern: "[0-9]{3}",
    },
]

function RectoCard() {
    return (
        <div className="recto-card">
            Hello world
        </div>
    )
}

function VersoCard() {
    return (
        <div className="verso-card">
            Hello world
        </div>
    )
}

function Button({handleClick, children}) {
    return <button onClick={handleClick}>
        {children}
    </button>
}

function Field(props) {
    const {name, label, onChange, value, errorMessage, ...inputProps} = props
    const capsName = `${label}`.toLocaleUpperCase()
    return (
        <div className="input-container">
            <label htmlFor={name}>{capsName}</label>
            <input
                id={name}
                name={name}
                onChange={onChange} 
                value={value}
                {...inputProps} />
            <span className='error-msg'>{errorMessage}</span>
        </div>
    )
}


function CreditCardForm() {

    const [state, setState] = useState({
        cardName: "",
        cardNumber: "",
        expirationDateMonth: "",
        expirationDateYear: "",
        cvc: ""
    })

    function handleInputChange(e) {
        const target = e.target
        const name = target.name
        let value = target.value


        setState({
            ...state,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(state)
    }

    return (
        <main>
            <VersoCard />
            <RectoCard />
            <form onSubmit={handleSubmit}>
                <Field 
                    key="cardname"
                    onChange={handleInputChange}
                    value={state['cardName']}
                    label="Cardholder name"
                    type="text"
                    maxLength={50}
                    required={true}
                    placeholder="e.g. Jane Appleseed" />
                <Field 
                    key="cardnumber"
                    onChange={handleInputChange}
                    value={state['cardNumber']}
                    label="Card number"
                    type="tel"
                    required={true}
                    placeholder="e.g. 1234 5678 9123 0000" />
                <div className='input-subcontainer'>
                    <div className='input-date-container'>
                        <Field 
                            key="expirationdatemonth"
                            onChange={handleInputChange}
                            value={state['expirationDateMonth']}
                            label="Exp date (MM/YY)"
                            type="tel"
                            required={true}
                            placeholder="MM" />
                        <Field 
                            key="expirationdateyear"
                            onChange={handleInputChange}
                            value={state['expirationDateYear']}
                            label=""
                            type="tel"
                            required={true}
                            placeholder="YY" />
                    </div>
                    <Field 
                            key="cvc"
                            onChange={handleInputChange}
                            value={state['cvc']}
                            maxLength={3}
                            label="cvc"
                            type="tel"
                            required={true}
                            pattern="[0-9]{3}"
                            placeholder="e.g. 123" />
                </div>

                {/* {inputs.map(input => (
                    <Field 
                        key={input.id}
                        onChange={handleInputChange}
                        value={state[input.name]}
                        {...input} />
                ))} */}
                <Button>Confirm</Button>
            </form>
            {JSON.stringify(state)}
        </main>
  )
}

export default CreditCardForm
