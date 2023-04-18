import express from "express";
import postsController from "../controllers/postsController";
import authMiddleware from '..middleware/auth.js';

const router = express.Router();

/* READ */
router.get('/', authMiddleware.verifyToken, postsController.getFeedPosts);
router.get('/:userId/posts',authMiddleware.verifyToken, postsController.getUserPosts);

/* UPDATE */
router.patch(':/id/like', authMiddleware.verifyToken, postsController.likePost);

export default router;