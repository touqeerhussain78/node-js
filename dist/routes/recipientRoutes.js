"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipientController_1 = require("../controllers/recipientController");
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
/**
 * @swagger
 * /recipients:
 *   get:
 *     summary: Retrieve a list of recipients
 *     responses:
 *       200:
 *         description: A list of recipients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', recipientController_1.getAllRecipients);
/**
 * @swagger
 * /recipients/show/{id}:
 *   get:
 *     summary: Retrieve a single recipient by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The recipient ID
 *     responses:
 *       200:
 *         description: A single recipient
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/show/:id', recipientController_1.getRecipientById);
/**
 * @swagger
 * /recipients:
 *   post:
 *     summary: Create a new recipient
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               location:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', (0, express_validator_1.body)('name').isString(), (0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('phone').isString(), (0, express_validator_1.body)('location').isString(), recipientController_1.createRecipient);
exports.default = router;
