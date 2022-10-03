import './Coment.css'
import dayjs from 'dayjs'
import relativTime from 'dayjs/plugin/relativeTime'
// import { useState } from 'react'

const Coment = ({ comments }) => {

    const Time = (date) => {
        dayjs.extend(relativTime)
        return dayjs(date).fromNow()
    }

    return (
        <>
        <div id="comment-itemm">
            <img src={comments?.user?.avatar} id="imgg" />
            <h4 id="namee">{comments?.user?.name}</h4>
            <div className="timee">{Time(comments?.created_at)}</div>
            <div className="comment-contentt">{comments?.content}</div>
        </div>
        </>
    )
}

export default Coment;