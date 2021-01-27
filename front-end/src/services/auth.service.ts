import axios from 'axios';

const verifyUser = async (email: string, password: string) => {
    return axios({
        baseURL: 'http://localhost:5000/v1',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        url: '/verifyUser',
        data: { email, password }
    })
}

const login = async (email: string, password: string) => {
    return axios({
        baseURL: 'http://localhost:5000/v1',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: '/login',
        data: { email, password }
    })
}


export { verifyUser, login }