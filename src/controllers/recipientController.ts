import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Recipient } from '../entities/Recipient';

export const getAllRecipients = async (req: Request, res: Response): Promise<Response> => {
  try {
    const recipients = await getRepository(Recipient).find();
    return res.json(recipients);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getRecipientById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const recipient = await getRepository(Recipient).findOne({ where: { id } });
    if (recipient) {
      return res.json(recipient);
    }
    return res.status(404).json({ message: "Recipient not found" });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const createRecipient = async (req: Request, res: Response): Promise<Response> => {
  try {
    const newRecipient = getRepository(Recipient).create(req.body);
    const result = await getRepository(Recipient).save(newRecipient);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};
