import mongoose, { Schema } from "mongoose";
import { addJWTMethodsToSchema, authMiddleware, signout, refreshToken } from 'easy-jwt-auth';


const OrganizationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    password: {
        type: String,
        required: true,
    },


}, { timestamps: true });

addJWTMethodsToSchema(OrganizationSchema, process.env.JWT_SECRET)

export default mongoose.model("Organization", OrganizationSchema);