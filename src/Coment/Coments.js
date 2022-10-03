import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useEffect } from "react"
import Coment from "./Coment"
import CreateComment from "./CreateComment"
//


 const Coments = ({postid}) => {
    const { token ,newPost } = useContext(AuthContext)
    const [ coments , setComents ] = useState([])
   
    const getAllComents = async () => {
        const response = await fetch(`http://ferasjobeir.com/api/posts/${postid}`, {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const json = await response.json()
        // window.alert(json.messages.comments)
        setComents(json.data.comments)
            console.log(json.data)
            
    }

    useEffect(() => {
        getAllComents()
    }, [newPost])    
    return (
        <div id="all-coments">
           {coments?.length > 0 && (
                <ul>
                {coments?.map((coment, i) => (
                    <Coment key={i} comments={coment} />
                ))}
                </ul>
            )}
            <CreateComment postid={postid}/>
        </div>
    )
}

export default Coments