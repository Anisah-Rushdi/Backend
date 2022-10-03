import { useRef, useContext, } from "react"
import { AuthContext } from "../../Context/AuthContext"
import "./CreatePost.css"

 const CreatePost = ({profile}) => {
  
    const { token,newPost, setAllPosts } = useContext(AuthContext)

    const postRef = useRef()
    
    // console.log(profile)

    const createPost = async () => {
        
        const response = await fetch('http://ferasjobeir.com/api/posts', {
            method: 'Post',
            body: JSON.stringify({
                content: postRef.current.value,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const json = await response.json()
        console.log(json.data)
        newPost(json.data)
        postRef.current.value = ''
      
    }

    return (
      
        <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
       <img src={profile?.avatar} className="img-avatar"/>
          <textarea ref={postRef}
            placeholder="What is happening"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
    
            <button  className="shareButton" onClick={createPost}>Create Post</button>
        </div>
        
      </div>
    )
}

export default CreatePost