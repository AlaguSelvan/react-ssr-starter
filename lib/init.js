import env from 'dotenv'

const initEnvironment = _ => env.config()

const envValues = initEnvironment()

export default envValues
