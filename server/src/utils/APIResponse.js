export function APIResponse(res, status, data) {
    return res.status(status).json({
        status,
        data
    });
}