import express from "express";
import {
  getComments,
  getCommentsById,
  createComments,
  updateComments,
  deleteComments,
} from "../controller/CommentController.js";

const router = express.Router();

router.get("/comments", getComments);
router.get("/comments/:id", getCommentsById);
router.post("/comments", createComments);
router.patch("/comments/:id", updateComments);
router.delete("/comments/:id", deleteComments);

export default router;
