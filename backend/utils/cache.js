import mcache from 'memory-cache';

const cache = duration => (req, res, next) => {
    if (process.env.NODE_ENV === 'development') next();
    let key = '__nd_backend__' + req.originalUrl || req.url;
    let cachedBody = mcache.get(key);
    if (cachedBody) {
        res.send(cachedBody);
        return;
    } else {
        res.sendResponse = res.send;
        res.send = body => {
            mcache.put(key, body, duration * 1000);
            res.sendResponse(body);
        };
        next();
    }
};

export default cache;
