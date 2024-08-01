import mongoose, { Schema } from "mongoose";

const BlogsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    organization: {
        type: Schema.Types.ObjectId,
        ref: "Organization",
        required: true,
    },

}, { timestamps: true });

export default mongoose.model("Blogs", BlogsSchema);