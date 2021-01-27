import React, { FunctionComponent } from 'react'

import { PrimaryButton } from '../Buttons'

type FormContainerProps = {
    title: string,
    subtitle?: string,
    center?: boolean,
    butonAction?: () => {} | void
}

const FormContainer: FunctionComponent<FormContainerProps> = (props) => {

    const {
        title,
        subtitle,
        center,
        children,
        butonAction = () => {}
    } = props;

    return (
        <div className="form-container">
            <div className={`form-titles${center ? " center" : ""}`}>
                <h1>{title}</h1>
                {
                    subtitle
                    &&
                    <p>{subtitle}</p>
                }
            </div>
            <div className="inputs-container">
                {children}
            </div>
            <div className={`button-container${center ? " center" : ""}`}>
                <PrimaryButton
                    color="verde"
                    title="Login"
                    width={200}
                    onClick={() => butonAction()}
                />
            </div>
        </div>
    )
}

export { FormContainer }