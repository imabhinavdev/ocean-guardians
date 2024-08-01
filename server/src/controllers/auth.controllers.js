import Organization from "../models/OrganizationSchema.js";
import { APIError } from "../utils/APIError.js";
import { APIResponse } from "../utils/APIResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
// login

export const Login = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        const requiredFields = { email, password };
        for (const [key, value] of Object.entries(requiredFields)) {
            if (!value) {
                return APIError(res, 400, `${key} is required`);
            }
        }

        const organization = await Organization.findOne({ email })
        if (!organization) {
            APIError(res, 404, "Organization not found");
        }

        const isMatch = await organization.matchPassword(password);
        if (!isMatch) {
            APIError(res, 400, "Invalid credentials");
        }

        const token = organization.generateToken();

        APIResponse(res, 200, { token });

    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        APIError(res, 500, "Internal Server Error");
    }

});

// Create a new organization
export const SignUp = asyncHandler(async (req, res) => {
    try {
        const { name, description, email, phone, address } = await req.body;

        const requiredFields = { name, description, email, phone, address };

        for (const [key, value] of Object.entries(requiredFields)) {
            if (!value) {
                APIError(res, 400, `${key} is required`);
            }
        }

        // check email is already exist or not
        const emailExist = await Organization.findOne({ email });
        if (emailExist) {
        }

        const organization = new Organization({
            name,
            description,
            email,
            phone,
            address,
        });
        if (organization) {
            APIResponse(res, 201, organization);
        }
        else {
            APIError(res, 400, "Invalid organization data");
        }

    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        APIError(res, 500, "Internal Server Error");
    }
}
);