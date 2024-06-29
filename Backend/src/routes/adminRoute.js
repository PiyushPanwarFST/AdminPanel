import express from "express";
import {
  createUser,
  searchUser,
  updateUser,
  deleteUser,
} from "../controllers/adminController.js";

const router = express.Router();

// Route to create a new user
router.post("/user", createUser);

// Route to search for users
router.get("/user", searchUser);

// Route to update a user by ID
router.patch("/user/:id", updateUser);

// Route to delete a user by ID
router.delete("/user/:id", deleteUser);

export default router;
