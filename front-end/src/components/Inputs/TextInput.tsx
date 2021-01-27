import React, { ChangeEvent, useState } from 'react'

type TextInputProrps = {
    name: string,
    type: string,
    value?: string,
    placeholder?: string,
    onChange: (e?: ChangeEvent<HTMLInputElement>) => {} | void
    errors?: string[]
    regex?: RegExp
    defaultErrorMsg?: string
}


const TextInput = ({
    name,
    value,
    placeholder,
    onChange,
    errors = [],
    type,
    regex,
    defaultErrorMsg = ""
}: TextInputProrps) => {

    const [errorsState, setErrorsState] = useState(errors);


    const validation = () => {
        
        if (regex && value && !regex.test(value)) {
            if (errorsState.length === 0) {
                setErrorsState([defaultErrorMsg])
            }

            if(value === "") {
                setErrorsState([])
            }
        }
        else{
            setErrorsState([])
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
                onKeyUp={() => validation()}
                className="text-input"
            />
            <div className="input-errors">
                {
                    errorsState.map((error) => <span>{error}</span>)
                }
            </div>
        </div>

    )
}

export { TextInput }