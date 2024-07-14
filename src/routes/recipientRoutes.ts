import express from 'express';
import { getAllRecipients, getRecipientById, createRecipient } from '../controllers/recipientController';
import { body } from 'express-validator';

const router = express.Router();

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
router.get('/', getAllRecipients);

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
router.get('/show/:id', getRecipientById);

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
router.post('/',
  body('name').isString(),
  body('email').isEmail(),
  body('phone').isString(),
  body('location').isString(),
  createRecipient
);

export default router;
