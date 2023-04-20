import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'user',
    initialState:{
        user: null,
        token: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;       
         },
         setLogin: (state, action) => {
            state.user.email = action.payload.email;
            state.token = action.payload.token;
         },
         setLogout: (state) => {
            state.user = null;
            state.token = null;
         },
         setFriends: (state, action) =>{
           if(state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.log("User friend is non-existent");
            }
         },
         setPosts: (state, action) => {
            state.posts = action.payload.posts;
         },
         setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) =>{
                if(post._id === action.payload.post_id) return action.payload.post;
                return post;
            });
            state.posts = updatedPosts;
             }
        }
});

export const {setUser, setLogin, setLogout, setFriends, setPosts, setPost} = authSlice.actions;
export default authSlice.reducer;