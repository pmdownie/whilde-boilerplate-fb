const catchErrors = fn => {
    return function(req, res, next) {
        return fn(req, res, next).catch(next);
    };
};

const displayErrors = (error, req, res, next) =>
    res.status(422).json({ message: error.message });

export default {
    catchErrors,
    displayErrors
};
