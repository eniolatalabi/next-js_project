import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    content: { type: String, required: true },
    img: { type: String },
    catSlug: { type: String, required: true },
    userEmail: { type: String, required: true },
    views: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
