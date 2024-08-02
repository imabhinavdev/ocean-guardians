// Auth middleware to check if the user is authenticated
import jwt from 'jsonwebtoken';
import OrganizationSchema from '../models/OrganizationSchema.js';
import { APIError } from '../utils/APIError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { APIResponse } from '../utils/APIResponse.js';

export const authMiddleware = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];
        if (!token) {
            return APIError(res, 401, "Unauthorized Access");
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return APIError(res, 401, "Unauthorized Access");
        }

        const organization = await OrganizationSchema.findById(decoded._id).select('-password');
        if (!organization) {
            return APIError(res, 401, "Unauthorized");
        }
        req.organization = organization;
        next();
    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        return APIError(res, 401, "Unauthorized");
    }
}
);

