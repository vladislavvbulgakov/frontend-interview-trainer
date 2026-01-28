const userProfileService = require("./userProfile.service");

async function getUserProfile(req, res) {
    try {
        const { userId } = req.params;

        const profile = await userProfileService.getUserProfile(userId);

        return res.json(profile);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

module.exports = {
    getUserProfile,
};
