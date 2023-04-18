import Post from '../models/posts.js';
import User from '../models/user.js';


const postsController = {};

/* ADD MIDDLEWARE METHODS HERE */

postsController.createPost = async(req, res) => {
 try{
    const { userId, description, picturePath} = req.body;
    const user = await User.findById(id);
    const newPost = new Post({
        userId,
        firstName: user.firstName,
        lastName: user.lastName,
        location: user.location,
        description,
        userPicturePath: user.picturePath,
        picturePath,
        likes: {},
        comments: []
    });

    await newPost.save();

    //returns all previous posts
    const post = await Post.find();

    res.status(201).json(post);

 } catch (err) {
    res.status(409).json({message: err.message})
 }
};

/* READ */
postsController.getFeedPosts = async (req, res)=>{
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
};

postsController.getUserPosts = async (req,res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({userId});
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
};

/* UPDATE */
postsController.likePost = async(req, res) => {
    try {
        const { id } = req.params;
        const {userId} = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        if(isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            {likes: post.likes},
            {new: true}
        );
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export default postsController;