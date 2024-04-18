const express = require("express");
const Router = express.Router();
const usersController = require("../controllers/users.controller");

/**
 * @swagger
 * /api/users/create:
 *   post:
 *     summary: Create new User
 *     tags: [Users]
 *     requestBody:
 *       description: Users object to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *                username: "John Doe"
 *                email: "Doe@gmail.com"
 *                password: "01145252525"
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       400:
 *         description: Invalid request
 */

Router.post("/api/users/create", usersController.createUser);

module.exports = Router;