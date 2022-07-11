import axios from "axios";
import React, {useState, useEffect} from "react";
import PostBody from "./PostBody";
import PostComment from "./PostComment";

export default function Post ({data, active, handle})
{
    const [visible, setVisible] = useState(false);
    const {id, title, body} = data;
    const [comments, setComments] = useState(null);
    const [error, setError] = useState(null);
    const [commentsAreLoading, setCommentsAreLoading] = useState(true);

    useEffect(()=>{
        axios
            .get('https://jsonplaceholder.typicode.com/comments?postId='+id)
            .then(res=>setComments(res.data))
            .catch(err=>setError(err))
            .finally(setCommentsAreLoading(false))
    },
    [])


    if(commentsAreLoading){
        return <div>Loading...</div>
    }
    if(visible && !error && !commentsAreLoading && comments && active===id) {
        return (
                <div className="" onClick={()=>{setVisible(!visible)}}>
                    <PostBody data={[title, body]}/>
                    {comments.map(comment=><PostComment key={id} comment={comment}/>)}
                </div>
        )
    }
    if(error)
    {
        return <div>Something went wrong</div>
    }
    return (
        <div className="" onClick={()=>{setVisible(!visible);handle(id)}}>
            <PostBody data={[title, body]}/>
        </div>
)
}