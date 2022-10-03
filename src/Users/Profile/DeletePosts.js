import { useContext, useEffect } from "react"
import { AuthContext } from "../../Context/AuthContext"
import './DeletePosts.css'

const DeletePost = ({posts}) => {
    // console.log(posts)
    const { token } = useContext(AuthContext)
    const deletablePosts = async(postId)=>{
        const response = await fetch(`http://ferasjobeir.com/api/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }
        })
        const json = await response.json()
        window.alert(json.messages)
        if (json.success) {
            console.log(json)
            // go to sign in
        }
    }
        useEffect(()=>{
            deletablePosts();
        },[])

    return(
        <>
        <div className="deletesPlace">
        {posts?.map((post, i)=>(
            <div key={i} className="big-post">
            <div key={post?.id}>
                <div id="delet-post">
                    <h6 id="h6">{post?.content}</h6>
                <button id="del" onClick={()=>{deletablePosts(post.id)}}>DELETE</button>
                </div>
            </div>
            </div>
        ))} 
        
        </div>
        </>
    )

}
export default DeletePost

