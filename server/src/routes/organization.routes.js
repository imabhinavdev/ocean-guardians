import { getOrganizationById, getOrganizations, updateOrganization, deleteOrganization } from "../controllers/organization.controllers.js";
import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", getOrganizations);
router.get("/:id", getOrganizationById);
router.put("/:id", authMiddleware, updateOrganization);
router.delete("/:id", authMiddleware, deleteOrganization);




export default router;