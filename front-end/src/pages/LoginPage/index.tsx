import React, { useState } from 'react';

import { FormContainer, TextInput } from '../../components'
import { verifyUser } from '../../services'
import { emailRegex, passwordRegex } from '../../utils'

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErrors, setEmailErrors] = useState(['']);
    const [passwordErrors, setPasswordErrors] = useState(['']);

    const handleValidate = async () => {
        const { data } = await verifyUser(email, password);
 
        if (!data.email) {
            setEmailErrors(['Usuário não encontrado!']);
            return false
        }
        else if (!data.password) {
            setPasswordErrors(['A senha não está correta!']);
            return false
        }

        return true
    }

    const handleLogin = async () => {

        const validation = await handleValidate();

        if(validation){
            console.log('validation');
            return
        }
    }

    return (
        <div id="login-page">
            <FormContainer
                title="Faça seu login"
                subtitle="O Markdown Flavor é editor de markdown, para testes e experiências!"
                butonAction={() => handleLogin()}
                buttonEnable={
                    email === '' ||
                    password === '' ||
                    !emailRegex.test(email) ||
                    !passwordRegex.test(password)
                }
                center
            >
                <TextInput
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    onChange={(e) => e && setEmail(e.target.value)}
                    value={email}
                    regex={emailRegex}
                    defaultErrorMsg="Email inválido"
                    errors={emailErrors}
                    onKeyUp={() => setEmailErrors([])}
                />
                <TextInput
                    type="password"
                    name="password"
                    placeholder="Senha"
                    onChange={(e) => e && setPassword(e.target.value)}
                    value={password}
                    regex={passwordRegex}
                    defaultErrorMsg="Senha inválida"
                    errors={passwordErrors}
                    onKeyUp={() => setPasswordErrors([])}
                />
            </FormContainer>
            <span>Não é cadastrado? <a href="/register">Faça seu cadastro!</a></span>
        </div>
    )
}

export { LoginPage }