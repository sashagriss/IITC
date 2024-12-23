import Post from "../moddels/post.js";

const createPost = async (req, res) => {
  try {
    console.log(req.body);
    const post = new Post({
      ...req.body,
    });

    const newPostRes = await post.save();
    res.status(201).json(newPostRes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.status(200).json({
      message: "all posts are got",
      allPosts,
    });
  } catch (error) {
    console.error("Error in getAllPosts:", error);
    res.status(500).json({ message: error.message });
  }
};
const deletePosts = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res
      .status(200)
      .json({ message: "Post deleted successfully", post: deletedPost });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    console.log(req.body);

    const updatedPost = await Post.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res
      .status(200)
      .json({ message: "Post updated successfully", post: updatedPost });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const postController = {
  createPost,
  getAllPosts,
  deletePosts,
  updatePost,
};
