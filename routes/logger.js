const express = require("express");
const router = express.Router();
const logger_controller = require("../controllers/logger");

/**
 * @swagger
 * /logger:
 *   post:
 *     summary: Send a message to the logger
 *     tags: [logger]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: The message text to send to the logger
 *                 example: "Hello, logger!"
 *     responses:
 *       200:
 *         description: Successfully received a response from the logger
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: string
 *                   example: "Hi there! How can I help you today?"
 *       400:
 *         description: Bad request due to missing or invalid text input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Text input is required."
 *       401:
 *         description: Unauthorized - JWT token is missing or invalid
 *       500:
 *         description: Server error occurred while processing the logger request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server error"
 *                 error:
 *                   type: string
 *                   example: "Error processing logger response"
 */
router.route("/logger").post(async (req, res) => {
  try {
    const { text } = req.body; // Get 'text' input from request body
    if (!text) {
      return res.status(400).json({ message: "Text input is required." });
    }

    const response = await logger_controller.logger(text); // Pass 'text' to controller
    res.status(200).json({ response }); // Return response from logger controller
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
