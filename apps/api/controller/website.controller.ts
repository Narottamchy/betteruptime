import type { Request, Response } from "express";
import { prismaClient } from "store/client";

export const createUser = async (req: Request, res: Response) => {
    const {url} = req.body;
    const website = await prismaClient.website.create({
        data: {url}
    });
    res.status(201).json(website);
}