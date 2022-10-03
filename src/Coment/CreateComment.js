import { useRef, useContext, } from "react"
import { AuthContext } from "../Context/AuthContext"


 const CreateComment = ({postid}) => {
 
    const { token,newPost } = useContext(AuthContext)
    const commentContentRef = useRef()


    const createComment = async (postid) => {
        
        const response = await fetch('http://ferasjobeir.com/api/comments', {
            method: 'Post',
            body: JSON.stringify({
                content: commentContentRef.current.value,
                post_id: postid
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const json = await response.json()
        // if(json.success) (json.data)
        if(json.success){
            newPost(json.data)
            commentContentRef.current.value=''
        } 
        
        window.alert(json.messages)

    }

   
   

    return (
        <div id="create-comment-component">
             <div id='coment'>
                    <input ref={commentContentRef} placeholder='Add a new coment' id='input'></input>
                    &nbsp;
                    <button onClick={()=>createComment(postid)} >Add</button>
                    </div>
        </div>
    )
}

export default CreateComment