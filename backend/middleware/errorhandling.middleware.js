const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const mesg = err.message || 'BACKEND ERROR !!';
    const extraDetails = err.extraDetails || 'error middleware !!';

    return res.status(status).json({mesg, extraDetails})
};

module.exports = errorMiddleware;