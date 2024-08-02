import Blog from '../models/BlogsSchema.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { APIResponse } from '../utils/APIResponse.js';
import { APIError } from '../utils/APIError.js';

// Get all blogs
export const getBlogs = asyncHandler(async (req, res) => {
    try {
        const blogs = await Blog.find().select('-content').populate('organization', 'name');

        if (blogs.length === 0) {
            return APIError(res, 404, "No blog found");
        }


        if (blogs) {
            return APIResponse(res, 200, blogs);
        }
        else {
            return APIError(res, 404, "No blog found");
        }
    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        return APIError(res, 500, "Internal Server Error");
    }
});

// Get blog by id
export const getBlogById = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findById(id).populate('organization', 'name');
        if (blog) {
            return APIResponse(res, 200, blog);
        }
        else {
            return APIError(res, 404, "Blog not found");
        }
    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        return APIError(res, 500, "Internal Server Error");
    }
});

// Update blog by id

export const updateBlog = asyncHandler(async (req, res) => {
    try {
        const { title, content, tags, organization } = req.body;

        const requiredFields = { title, content, tags, organization };

        for (const [key, value] of Object.entries(requiredFields)) {
            if (value === undefined) {
                return APIError(res, 400, `${key} is required`);
            }
        }
        const id = req.params.id;
        const blog = await Blog.findByIdAndUpdate(id, {
            title,
            content,
            tags,
            organization,
        }, { new: true });

        if (blog) {
            return APIResponse(res, 200, "Blog updated successfully");
        }
        else {
            return APIError(res, 404, "Blog not found");
        }


    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        return APIError(res, 500, "Internal Server Error");
    }
});


// Delete blog by id

export const deleteBlog = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findByIdAndDelete(id);
        if (blog) {
            return APIResponse(res, 200, { message: "Blog deleted successfully" });
        }
        else {
            return APIError(res, 404, "Blog not found");
        }
    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        return APIError(res, 500, "Internal Server Error");
    }
}
);


// Create blog

export const createBlog = asyncHandler(async (req, res) => {
    try {
        const { title, content, tags, organization } = req.body;

        const requiredFields = { title, content, tags, organization };

        for (const [key, value] of Object.entries(requiredFields)) {
            if (value === undefined) {
                return APIError(res, 400, `${key} is required`);
            }
        }

        const blog = await Blog.create({
            title,
            content,
            tags,
            organization,
        });

        return APIResponse(res, 201, blog);
    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        return APIError(res, 500, "Internal Server Error");
    }
});