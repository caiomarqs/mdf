import React, { FunctionComponent } from 'react';

type PrimaryButtonProps = {
    title: string,
    color: "verde" | "amarelo" | "vermelho" | "transparent",
    width?: number,
    onClick?: () => {} | void,
    disabled?: boolean
}

const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
    color = "transparent",
    onClick = () => { },
    title,
    width = 160,
    disabled,
    ...props
}) => {


    return (
        <button
            id={`${title.toLocaleLowerCase()}-btn`}
            className={`primary-btn ${color}-btn ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            style={{ width: `${width}px` }}
            disabled={disabled}
        >
            <span>{title}</span>
        </button >
    )
}

export { PrimaryButton }