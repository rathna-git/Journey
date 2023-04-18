import express from 'express';
import userController from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';


const router = express.Router();

/* READ */
router.get('/:id', authMiddleware.verifyToken, userController.getUser);
router.get('/:id/friends', authMiddleware.verifyToken, userController.getUserFriends);

/* UPDATE */
router.patch('/:id/:friendId', authMiddleware.verifyToken, userController.addRemoveFriend);

export default router;