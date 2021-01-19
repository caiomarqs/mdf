const onlyString = /^[A-Za-z]+$/
const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/g;

const regexRules = {
    onlyString,
    email,
    pass
}

export { regexRules }