const express = require("express");
const router = express.Router({ mergeParams: true });

const userController = require("./user.controller");
const userProfileController = require("../userProfile/userProfile.controller");

router.post("/", userController.registerUser);

router.get("/:userId", userController.getUserProfile);

router.get("/:userId/interviews", userProfileController.getUserProfile);

module.exports = router;
