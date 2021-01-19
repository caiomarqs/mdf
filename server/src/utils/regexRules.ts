const onlyString = /^[A-Za-z]+$/
const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;

const regexRules = {
    onlyString,
    email,
    pass
}

export { regexRules }