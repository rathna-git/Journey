import mongoose from 'mongoose';



//ADD SCHEMAS HERE
const PostSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        location: String, //add Google Vision API here
        description: String,
        picturePath: String,
        userPicturePath: String,
        likes: {
            type: Map,
            of: Boolean,
        },
        comments: {
            type: Array,
            default: []
        },

    },
    { timestamps: true }
);


const Post = mongoose.model('post', PostSchema);

export default Post;