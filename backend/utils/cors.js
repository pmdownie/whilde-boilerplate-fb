import cors from 'cors';

const whitelist = process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : [];

const options = {
    origin: function(origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

export default () => cors(options);
