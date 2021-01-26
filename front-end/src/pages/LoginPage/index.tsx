import React from 'react';

import { FormContainer, TextInput } from '../../components'

const LoginPage = () => {
    return (
        <div id="login-page">
            <FormContainer
                title="Faça seu login"
                subtitle="O Markdown Flavor é editor de markdown, para testes e experiências!"
                method="POST"
                center
            >
                <TextInput
                    type="text"
                    name="email"
                    placeholder="E-mail"
                />
                <TextInput
                    type="password"
                    name="password"
                    placeholder="Senha"
                />
            </FormContainer>
            <span>Não é cadastrado? <a href="/register">Faça seu cadastro!</a></span>
        </div>
    )
}

export { LoginPage }