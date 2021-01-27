const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const onlyStringRegex = /^[A-Za-z]+$/
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;

export {
    emailRegex,
    onlyStringRegex,
    passwordRegex
}