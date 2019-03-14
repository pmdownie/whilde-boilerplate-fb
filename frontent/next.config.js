const dotEnvResult = require('dotenv').config()
const prod = process.env.NODE_ENV === 'production'

if (dotEnvResult.error) {
    throw dotEnvResult.error
}

module.exports = {
    target: 'serverless',
    env: {
        ENDPOINT: prod ? 'https://api.whilde.studio' : process.env.ENDPOINT,
    },
}
