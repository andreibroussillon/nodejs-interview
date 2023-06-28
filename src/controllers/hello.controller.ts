import { Request, Response } from "express";

export const helloController = (req: Request, res: Response) => {
  const name = req.query.name || 'unknown';
  res.send(`Hello ${name} !`);
};