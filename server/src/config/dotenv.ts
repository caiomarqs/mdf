const dotenv = () => {
    switch (process.env.NODE_ENV) {
        case "dev": {
            console.log("\nEnvironment is 'development' \n")
            require('dotenv').config({ path: process.cwd() + '/.env.dev' })
            break;
        }

        case "test": {
            require('dotenv').config({ path: process.cwd() + '/.env.test' })
            break;
        }

        case "prod": {
            require('dotenv').config({ path: process.cwd() + '/.env.prod' })
            break;
        }
        
        default:
            throw new Error(`'NODE_ENV' ${process.env.NODE_ENV} is not handled!`)
    }

    return process.env;
}

export default dotenv;