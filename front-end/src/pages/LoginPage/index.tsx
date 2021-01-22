import React from 'react';

import { FormContainer } from '../../components'

const LoginPage = () => {
    return (
        <div id="login-page">
            <FormContainer
                title="Faça seu login"
                subtitle="O Markdown Flavor é editor de markdown, para testes e experiências!"
                center
            >
            </FormContainer>
            <span>Não é cadastrado? <a href="/register">Faça seu cadastro!</a></span>
        </div>
    )
}

export { LoginPage }