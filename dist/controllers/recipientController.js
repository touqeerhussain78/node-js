"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRecipient = exports.getRecipientById = exports.getAllRecipients = void 0;
const typeorm_1 = require("typeorm");
const Recipient_1 = require("../entities/Recipient");
const getAllRecipients = async (req, res) => {
    try {
        const recipients = await (0, typeorm_1.getRepository)(Recipient_1.Recipient).find();
        return res.json(recipients);
    }
    catch (err) {
        return res.status(500).json({ message: "Server error" });
    }
};
exports.getAllRecipients = getAllRecipients;
const getRecipientById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const recipient = await (0, typeorm_1.getRepository)(Recipient_1.Recipient).findOne({ where: { id } });
        if (recipient) {
            return res.json(recipient);
        }
        return res.status(404).json({ message: "Recipient not found" });
    }
    catch (err) {
        return res.status(500).json({ message: "Server error" });
    }
};
exports.getRecipientById = getRecipientById;
const createRecipient = async (req, res) => {
    try {
        const newRecipient = (0, typeorm_1.getRepository)(Recipient_1.Recipient).create(req.body);
        const result = await (0, typeorm_1.getRepository)(Recipient_1.Recipient).save(newRecipient);
        return res.status(201).json(result);
    }
    catch (err) {
        return res.status(500).json({ message: "Server error" });
    }
};
exports.createRecipient = createRecipient;
