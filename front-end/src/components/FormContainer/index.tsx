import React, { FunctionComponent } from 'react'

import { PrimaryButton } from '../Buttons'

type FormContainerProps = {
    title: string,
    subtitle?: string,
    center?: boolean,
    method?: "GET" | "POST"
}

const FormContainer: FunctionComponent<FormContainerProps> = (props) => {

    const {
        title,
        subtitle,
        center,
        children,
        method
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
            <form method={method} >
                <div className="inputs-container">
                    {children}
                </div>
                <div className={`button-container${center ? " center" : ""}`}>
                    <PrimaryButton
                        color="verde"
                        title="Login"
                        width={200}
                    />
                </div>
            </form>
        </div>
    )
}

export { FormContainer }