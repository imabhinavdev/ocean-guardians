import { getOrganizationById, getOrganizations, updateOrganization, deleteOrganization } from "../controllers/organization.controllers.js";
import { Router } from "express";

const router = Router();

router.get("/", getOrganizations);
router.get("/:id", getOrganizationById);
router.put("/:id", updateOrganization);
router.delete("/:id", deleteOrganization);




export default router;