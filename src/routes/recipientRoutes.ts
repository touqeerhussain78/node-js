import express from 'express';
import { RecipientController } from '../controllers/recipientController';
import { body } from 'express-validator';
import { uploadMultiple } from '../middlewares/multipleUploads'; // Adjust the import path as needed

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
router.get('/', RecipientController.getAllRecipients);

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
router.get('/show/:id', RecipientController.getRecipientById);

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
/*upload.single('file'),*/
router.post('/',
  body('name').isString(),
  body('email').isEmail(),
  body('phone').isString(),
  body('location').isString(),
  uploadMultiple,
  RecipientController.createRecipient
);

/**
 * @swagger
 * /recipients/{id}:
 *   put:
 *     summary: Update a recipient by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The recipient ID
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
 *       200:
 *         description: The updated recipient
 *         content:
 *           application/json:
 *             schema:
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
 *       404:
 *         description: Recipient not found
 */
router.put('/:id', RecipientController.updateRecipient);

/**
 * @swagger
 * /recipients/{id}:
 *   delete:
 *     summary: Delete a recipient by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The recipient ID
 *     responses:
 *       204:
 *         description: Recipient deleted
 *       404:
 *         description: Recipient not found
 */
router.delete('/:id', RecipientController.deleteRecipient);

export default router;
