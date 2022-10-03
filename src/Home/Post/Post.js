import './Post.css'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import relativTime from 'dayjs/plugin/relativeTime'
import { useState } from 'react'
import Coments from '../../Coment/Coments'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'


const Post = ({ data }) => {
    // const [counter, setCounter] = useState(0)
    const { token } = useContext(AuthContext)
    const [ShowText, SetShowText] = useState(false)

    const Like = (id) => {

        fetch(`http://ferasjobeir.com/api/posts/like`, {
            method: 'POST',
            body: JSON.stringify({ post_id: id }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }

    const disLike = (id) => {
        fetch(`http://ferasjobeir.com/api/posts/unlike`, {
            method: 'POST',
            body: JSON.stringify({ post_id: id }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

    }



    const Time = (date) => {
        dayjs.extend(relativTime)
        return dayjs(date).fromNow()
    }

    return (
        <div className="post-item">
            <img src={data?.user?.avatar} id="img" />
            <h4 id="name">{data?.user?.name}</h4>
            <div className="time">{Time(data?.created_at)}</div>
            <div className="post-content">{data?.content}</div>
            <div className="post-icons">
                <Link href="" className="like-icon" id='like-icon'>
                    <span className="material-symbols-outlined">favorite</span>
                </Link>
                &nbsp;
                <Link href="" onClick={() => { SetShowText(!ShowText) }} className="comment-icon" id='comment-icon'>
                    <span className="material-symbols-outlined">chat_bubble</span>
                </Link>
                {ShowText && <div>
                <Coments postid={data.id}/>
                    {/* <div id='coment'>
                    <input placeholder='Add a new coment' id='input'>{data.icon}</input>
                    &nbsp;
                    <button id='button'>Add</button>
                    </div> */}
                </div>}
            </div>
        </div>
    )
}

export default Post;