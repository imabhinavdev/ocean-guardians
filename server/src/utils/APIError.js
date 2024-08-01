export function APIError(res, status, message) {
    return res.status(status).json({
        status,
        message
    });
}