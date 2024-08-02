import Organization from "../models/OrganizationSchema.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { APIResponse } from "../utils/APIResponse.js";
import { APIError } from "../utils/APIError.js";




// Get all organizations
export const getOrganizations = asyncHandler(async (req, res) => {
    try {
        const organizations = await Organization.find().select('-password');

        if (organizations.length === 0) {
            return APIError(res, 404, "No organization found");
        }

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
        const organization = await Organization.findById(req.params.id).select('-password');
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
        const { name, description, email, phone, address, password } = await req.body;

        const requiredFields = { name, description, email, phone, address };

        for (const [key, value] of Object.entries(requiredFields)) {
            if (!value) {
                return APIError(res, 400, `${key} is required`);
            }
        }
        const org = await Organization.findByIdAndUpdate(req.params.id, {
            name, description, email, phone, address
        }, { new: true }).select('-password');

        if (org) {
            APIResponse(res, 200, org);
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
        const id = req.params.id;
        const organization = await Organization.findByIdAndDelete(id).select('-password');
        if (organization) {
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