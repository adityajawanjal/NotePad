const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const userRoute = express.Router();

userRoute.post("/api/users",registerUser);

module.exports = userRoute;