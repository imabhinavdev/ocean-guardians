import Organization from "../models/OrganizationSchema.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { APIResponse } from "../utils/APIResponse.js";
import { APIError } from "../utils/APIError.js";




// Get all organizations
export const getOrganizations = asyncHandler(async (req, res) => {
    try {
        const organizations = await Organization.find();
        if (organizations) {
            APIResponse(res, 200, organizations);
        }
        else {
            APIError(res, 404, "No organization found");
        }
    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        APIError(res, 500, "Internal Server Error");
    }
}
);

// Get organization by id
export const getOrganizationById = asyncHandler(async (req, res) => {
    try {
        const organization = await Organization.findById(req.params.id);
        if (organization) {
            APIResponse(res, 200, organization);
        }
        else {
            APIError(res, 404, "Organization not found");
        }
    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        APIError(res, 500, "Internal Server Error");
    }
}
);

// Update organization by id
export const updateOrganization = asyncHandler(async (req, res) => {
    try {
        const organization = await Organization.findById(req.params.id);
        if (organization) {
            organization.name = req.body.name || organization.name;
            organization.description = req.body.description || organization.description;
            organization.email = req.body.email || organization.email;
            organization.phone = req.body.phone || organization.phone;
            organization.address = req.body.address || organization.address;

            const updatedOrganization = await organization.save();
            APIResponse(res, 200, updatedOrganization);
        }
        else {
            APIError(res, 404, "Organization not found");
        }
    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        APIError(res, 500, "Internal Server Error");
    }
}
);

// Delete organization by id
export const deleteOrganization = asyncHandler(async (req, res) => {
    try {
        const organization = await Organization.findById(req.params.id);
        if (organization) {
            await organization.remove();
            APIResponse(res, 200, "Organization deleted successfully");
        }
        else {
            APIError(res, 404, "Organization not found");
        }
    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        APIError(res, 500, "Internal Server Error");
    }
}
);