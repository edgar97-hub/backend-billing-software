import express from "express";
import {
  createPlanInternet,
  getPlansInternet,
  updatePlanInternet,
  removePlanInternet
} from "../controllers/planInternet.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
// router.get("/:id", verifyToken, getUser);
router.post("/", verifyToken, createPlanInternet);
router.put("/", verifyToken, updatePlanInternet);
router.get("/", verifyToken, getPlansInternet);
router.delete("/", verifyToken, removePlanInternet);

/* UPDATE */
// router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
