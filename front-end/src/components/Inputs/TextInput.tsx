import React from 'react'

type TextInputProrps = {
    name: string,
    type: string,
    value?: string,
    placeholder?: string,
    onChange?: () => {},
    errors?: string[]
}


const TextInput = ({ name, value, placeholder, onChange, errors, type }: TextInputProrps) => {
    return (
        <div className="text-input-container">
            <input
                id={`input-${name}`}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="text-input"
            />
            <div className="input-errors">
                {
                    errors?.map((error) => <span>error</span>)
                }
            </div>
        </div>

    )
}

export { TextInput }