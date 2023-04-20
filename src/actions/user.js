const setMode = () => {
    return {
        type: 'SET_MODE'
    }
}

const setLogin = () => {
    return {
        type: 'SET_LOGIN'
    }
}

const setLogout = () => {
    return {
        type: 'SET_LOGOUT'
    }
}

const setFriends = () => {
    return {
        type: 'SET_FRIENDS'
    }
}

export default {
    setMode,
    setLogin,
    setLogout,
    setFriends
}