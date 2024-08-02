import { createBlog, updateBlog, getBlogById, getBlogs, deleteBlog } from "../controllers/blog.controllers.js";
import { Router } from 'express';
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.post('/', authMiddleware, createBlog);
router.put('/:id', authMiddleware, updateBlog);
router.delete('/:id', authMiddleware, deleteBlog);

export default router;

