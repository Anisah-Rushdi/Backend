import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useEffect } from "react"
import Post from "./Post/Post"


 const Posts = () => {
    
    const { token, posts, newPost, setPosts } = useContext(AuthContext)


    const getAllPosts = async () => {
        const response = await fetch('http://ferasjobeir.com/api/posts', {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const json = await response.json()
        // window.alert(json.messages)
        setPosts(json.data)
            console.log(json.data)
            
    }

    useEffect(() => {
        getAllPosts()
    }, [])    
    return (
        <div id="all-posts">

           {posts?.length > 0 && (
                <ul>
                {posts?.map((post, i) => (
                    <Post key={i} data={post} />
                ))}
                </ul>
            )}
        </div>
    )
}

export default Posts