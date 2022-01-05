let errorHandler = (err, req, res, next) => {
    if (err.errorType != undefined) {

        if (err.errorType.isShowStackTrace) {
            console.error("show me my error", err);
        }
        return;
    }
    console.error(err);
    res.status(700).json({ error: "General error" });
}

module.exports = errorHandler;