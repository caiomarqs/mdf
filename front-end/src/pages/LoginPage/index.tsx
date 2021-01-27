import React, { useState } from 'react';

import { FormContainer, TextInput } from '../../components'
import { verifyUser } from '../../services'
import { emailRegex, passwordRegex } from '../../utils'

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErros, setEmailErrors] = useState([]);
    const [passwordErros, setPasswordErrors] = useState([]);

    const handleValidate = () => {


        return false
    }

    const handleLogin = () => {


    }

    return (
        <div id="login-page">
            <FormContainer
                title="Faça seu login"
                subtitle="O Markdown Flavor é editor de markdown, para testes e experiências!"
                butonAction={() => handleLogin()}
                center
            >
                <TextInput
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    onChange={(e) => e && setEmail(e?.target.value)}
                    value={email}
                    regex={emailRegex}
                    defaultErrorMsg="Email inválido"
                />
                <TextInput
                    type="text"
                    name="password"
                    placeholder="Senha"
                    onChange={(e) => e && setPassword(e?.target.value)}
                    value={password}
                    regex={passwordRegex}
                    defaultErrorMsg="Senha inválida"
                />
            </FormContainer>
            <span>Não é cadastrado? <a href="/register">Faça seu cadastro!</a></span>
        </div>
    )
}

export { LoginPage }