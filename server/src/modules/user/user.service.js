const userRepository = require("../../db/repositories/user.repository");

async function registerUser({ email, passwordHash, selectedGrade }) {
    const existingUser = await userRepository.getUserByEmail(email);

    if (existingUser) {
        throw new Error("USER_ALREADY_EXISTS");
    }

    const user = await userRepository.createUser({
        email,
        passwordHash,
        selectedGrade,
    });

    return user;
}

async function getUserProfile(userId) {
    const user = await userRepository.getUserById(userId);

    if (!user) {
        throw new Error("USER_NOT_FOUND");
    }

    return user;
}

module.exports = {
    registerUser,
    getUserProfile,
};
