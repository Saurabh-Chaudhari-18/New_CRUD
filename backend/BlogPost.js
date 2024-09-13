const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Title is required"],
  },
  message: {
    type: String,
    required: [true, "Content is required"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;
