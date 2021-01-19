const dotenv = () => {
    switch (process.env.NODE_ENV) {
        case "dev": {
            console.log("\nEnvironment is 'development' \n")
            require('dotenv').config({ path: __dirname + '/../.env.dev' })
            break;
        }

        case "test": {
            require('dotenv').config({ path: __dirname + '/../.env.dev' })
            break;
        }

        case "prod": {
            require('dotenv').config({ path: __dirname + '/../.env.dev' })
            break;
        }
        default:
            throw new Error(`'NODE_ENV' ${process.env.NODE_ENV} is not handled!`)
    }
}

export default dotenv;