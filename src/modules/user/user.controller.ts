import { Request, Response } from "express";
import { UserService } from "./user.service";

// Controllers read the request and send the response. Nothing else.

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsers();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUserById(req.params.id);

    if (!result) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getUserById,
};
