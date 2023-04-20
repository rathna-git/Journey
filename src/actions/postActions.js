const setMode = () => {
    return {
        type: 'SET_MODE'
    }
}

const setPosts = () => {
    return {
        type: 'SET_POSTS'
    }
}

const setPost = () => {
    return {
        type: 'SET_POST'
    }
}

export default {
    setMode,
    setPosts,
    setPost
}