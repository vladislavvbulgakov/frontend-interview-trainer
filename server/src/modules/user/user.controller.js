const userService = require("./user.service");

async function registerUser(req, res) {
    try {
        const { email, password, selectedGrade } = req.body;

        if (!email || !password || !selectedGrade) {
            return res.status(400).json({
                message: "Missing required fields",
            });
        }

        const passwordHash = password;

        const user = await userService.registerUser({
            email,
            passwordHash,
            selectedGrade,
        });

        return res.status(201).json(user);
    } catch (err) {
        if (err.message === "USER_ALREADY_EXISTS") {
            return res.status(409).json({
                message: "User already exists",
            });
        }

        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

async function getUserProfile(req, res) {
    try {
        const { userId } = req.params;

        const user = await userService.getUserProfile(userId);

        return res.json(user);
    } catch (err) {
        if (err.message === "USER_NOT_FOUND") {
            return res.status(404).json({
                message: "User not found",
            });
        }

        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

module.exports = {
    registerUser,
    getUserProfile,
};
