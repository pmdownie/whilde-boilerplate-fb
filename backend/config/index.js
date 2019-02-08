require('dotenv').config({ path: `./config/.env.${process.env.NODE_ENV}` });

export default {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT,
    db: {
        uri: process.env.DB_URI
    }
};
