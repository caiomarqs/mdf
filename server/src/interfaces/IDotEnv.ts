declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string | undefined
            NODE_ENV: 'prod' | 'dev' | 'test';
        }
    }
}

export { }