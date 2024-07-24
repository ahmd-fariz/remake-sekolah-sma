import Comments from "../models/CommentsModel.js";

// Create a new comment
export const createComment = async (req, res) => {
  try {
    const newComment = await Comments.create(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all comments
export const getAllComments = async (req, res) => {
  try {
    const comments = await Comments.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single comment by ID
export const getCommentById = async (req, res) => {
  try {
    const comment = await Comments.findByPk(req.params.id);
    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(404).json({ message: "Comment not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a comment by ID
export const updateComment = async (req, res) => {
  try {
    const comment = await Comments.findByPk(req.params.id);
    if (comment) {
      await comment.update(req.body);
      res.status(200).json(comment);
    } else {
      res.status(404).json({ message: "Comment not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a comment by ID
export const deleteComment = async (req, res) => {
  try {
    const comment = await Comments.findByPk(req.params.id);
    if (comment) {
      await comment.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Comment not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};