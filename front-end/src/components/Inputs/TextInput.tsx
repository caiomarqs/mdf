import React, { ChangeEvent, useState } from 'react'

import { InputTypes } from './InputTypes'

type TextInputProrps = {
    name: string,
    type: InputTypes,
    value?: string,
    placeholder?: string,
    onChange: (e?: ChangeEvent<HTMLInputElement>) => {} | void
    errors?: string[]
    regex?: RegExp
    defaultErrorMsg?: string,
    onKeyUp?: () => {} | void
}


const TextInput = ({
    name,
    value,
    placeholder,
    onChange,
    errors = [],
    type,
    regex,
    defaultErrorMsg = "",
    onKeyUp = () => {}
}: TextInputProrps) => {

    const [inputsErrorsState, setInputsErrorsState] = useState(['']);
    
    const validation = () => {


        if (regex && value && !regex.test(value)) {

            setInputsErrorsState([defaultErrorMsg])

            if (value === "") {
                setInputsErrorsState([])
            }
        }
        else {
            setInputsErrorsState([])
        }
    }


    return (
        <div className="text-input-container">
            <input
                id={`input-${name}`}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
                onKeyUp={() => {
                    onKeyUp();
                    validation()
                }}
                className="text-input"
            />
            <div className="input-errors">
                {
                    inputsErrorsState.map((error, i) => <span key={`errro-${name}-${i}`}>{error}</span>)
                }
                {
                    errors.map((error, i) => <span key={`errro-${name}-${i}`}>{error}</span>)
                }
            </div>
        </div>

    )
}

export { TextInput }