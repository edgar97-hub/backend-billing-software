import express from "express";
import {
  createClient,
  getClients,
  updateClient,
  removeClient,
  bulkInsertion
} from "../controllers/Client.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// router.get("/:id", verifyToken, getUser);
router.post("/", verifyToken, createClient);
router.post("/bulk-insertion", verifyToken, bulkInsertion);
router.put("/", verifyToken, updateClient);
router.get("/", verifyToken, getClients);
router.delete("/", verifyToken, removeClient);

// router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
