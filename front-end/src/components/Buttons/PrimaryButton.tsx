import React, { FunctionComponent } from 'react';

type PrimaryButtonProps = {
    title: string,
    color: "verde" | "amarelo" | "vermelho" | "transparent",
    width?: number,
    onClick?: () => {},
}

const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
    color = "transparent",
    onClick = () => { },
    title,
    width = 160,
    ...props
}) => {


    return (
        <button
            id={`${title.toLocaleLowerCase()}-btn`}
            className={`primary-btn ${color}-btn`}
            onClick={onClick}
            style={{ width: `${width}px` }}

        >
            <span>{title}</span>
        </button >
    )
}

export { PrimaryButton }