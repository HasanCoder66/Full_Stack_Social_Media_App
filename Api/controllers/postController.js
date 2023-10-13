import Post from "../models/postSchema.js";
import User from "../models/userSchema.js";

// Create post
// localhost:8800/api/post

export const Createpost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update post
// localhost:8800/api/:id/updatepost

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("The post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete post
// localhost:8800/api/:id/deletePost

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("The post has been Deleted");
    } else {
      res.status(403).json("you can Delete only your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// like post or dislike post
// localhost:8800/api/:id/likePost
export const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(500).json("The post has been disliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// get a post
// localhost:8800/api/:id

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get timeline posts
//localhost:8800/api/timeline/all

export const getTimeline = async (req, res) => {
  // let postArray = [];
  try {
    const currentUser = await User.findById(req.params.userId);
    console.log(currentUser);
    const postUser = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(postUser.concat(...friendPosts));
  } catch (error) {
    res.status(500).json(error);
  }
};

// get User all posts
//localhost:8800/api/timeline/all

export const getAllPost = async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.params.userName });
    const posts = await Post.find({ userId: user._id });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};
