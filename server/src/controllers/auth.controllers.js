import Organization from "../models/OrganizationSchema.js";
import { APIError } from "../utils/APIError.js";
import { APIResponse } from "../utils/APIResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
// login

export const Login = asyncHandler(async (req, res) => {
    try {
        const { email, password } = await req.body;

        const requiredFields = { email, password };
        for (const [key, value] of Object.entries(requiredFields)) {
            if (!value) {
                return APIError(res, 400, `${key} is required`);
            }
        }

        const organization = await Organization.findOne({ email })
        if (!organization) {
            return APIError(res, 404, "Organization not found");
        }

        // const isMatch = await organization.matchPassword(password);
        const isMatch = true
        if (!isMatch) {
            return APIError(res, 400, "Invalid credentials");
        }

        const options = {
            expiresIn: "1d",
            httpOnly: true,
        };
        organization.password = undefined;

        const token = organization.generateToken(process.env.JWT_SECRET);

        res.status(200).cookie("token", token, options).json({
            success: true,
            token,
            organization
        });

    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        return APIError(res, 500, err.message);
    }

});

// Create a new organization
export const SignUp = asyncHandler(async (req, res) => {
    try {
        const { name, description, email, phone, address, password } = await req.body;

        const requiredFields = { name, description, email, phone, address, password };

        for (const [key, value] of Object.entries(requiredFields)) {
            if (!value) {
                return APIError(res, 400, `${key} is required`);
            }
        }

        // check email is already exist or not
        const emailExist = await Organization.findOne({ email });
        if (emailExist) {
            return APIError(res, 400, "Email already exists");
        }

        const organization = await Organization.create({
            name,
            description,
            email,
            phone,
            address,
            password,
        });
        if (organization) {
            organization.password = undefined;
            return APIResponse(res, 201, organization);
        }
        else {
            return APIError(res, 400, "Invalid organization data");
        }

    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        return APIError(res, 500, "Internal Server Error");
    }
}
);