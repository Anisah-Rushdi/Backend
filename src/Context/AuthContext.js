import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(window.localStorage.getItem('token'))
    const [loggedIn, setLoggedIn] = useState(!!token)
    const [posts, setPosts] = useState([])
    const [allPosts, setAllPosts] = useState([])
    const [userName, setUserName] = useState('')
    const [userEmailAddress, setUserEmailAddress] = useState('')



    const logIn = (data) => {
        window.localStorage.setItem('token', data.token)
        setLoggedIn(true)
        setToken(data.token)
    }
    const logOut = () => {
        window.localStorage.removeItem('token')
        setLoggedIn(false)
        setToken('')
    }

    const newPost = (data) => {
        console.log(data)
        setAllPosts([...allPosts, data])
    }
    return (
        <AuthContext.Provider value={{
            loggedIn,
            token,
            logIn,logOut,
            posts, setPosts,
            allPosts, setAllPosts,
            newPost,
            userName, setUserName,
            userEmailAddress, setUserEmailAddress,


        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider