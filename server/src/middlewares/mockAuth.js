function mockAuth(req, res, next) {
    // временно, пока нет auth
    req.user = {
        id: process.env.MOCK_USER_ID,
    };

    next();
}

module.exports = mockAuth;
