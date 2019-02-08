require('dotenv').config({ path: `./config/.env.${process.env.NODE_ENV}` });

export default {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT,
    content: {
        space: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN
    }
};
