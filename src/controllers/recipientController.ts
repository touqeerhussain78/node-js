import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Recipient } from '../entities/Recipient';

export class RecipientController {
  static async getAllRecipients(req: Request, res: Response) {
    try {
      const recipients = await getRepository(Recipient).find();
      return res.json(recipients);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async getRecipientById(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    try {
      const recipient = await getRepository(Recipient).findOne(id);
      if (!recipient) {
        return res.status(404).json({ message: 'Recipient not found' });
      }
      return res.json(recipient);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async createRecipient(req: Request, res: Response) {
    console.log(req);
    const { name, email, phone, location } = req.body;
    // const { filename }: any = req.file;
    console.log(req.file);
    try {
      const recipient = getRepository(Recipient).create({ name, email, phone, location });
      const result = await getRepository(Recipient).save(recipient);
      return res.status(201).json(result);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async updateRecipient(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const { name, email, phone, location } = req.body;
    try {
      const recipient = await getRepository(Recipient).findOne(id);
      if (!recipient) {
        return res.status(404).json({ message: 'Recipient not found' });
      }
      recipient.name = name;
      recipient.email = email;
      recipient.phone = phone;
      recipient.location = location;
      const result = await getRepository(Recipient).save(recipient);
      return res.json(result);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async deleteRecipient(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    try {
      const result = await getRepository(Recipient).delete(id);
      if (result.affected === 0) {
        return res.status(404).json({ message: 'Recipient not found' });
      }
      return res.status(204).send();
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
