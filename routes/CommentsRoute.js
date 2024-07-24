import express from "express";
import {
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment,
} from "../controllers/CommentsController.js";

const router = express.Router();

router.post("/comments", createComment);
router.get("/comments", getAllComments);
router.get("/comments/:id", getCommentById);
router.put("/comments/:id", updateComment);
router.delete("/comments/:id", deleteComment);

export default router;
