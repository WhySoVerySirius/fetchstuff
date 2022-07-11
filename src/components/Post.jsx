import axios from "axios";
import React, {useState, useEffect} from "react";
import PostBody from "./PostBody";
import PostComment from "./PostComment";

export default function Post ({data})
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


    if(!visible) {
        return (
                <div className="" onClick={()=>setVisible(!visible)}>
                    <PostBody data={[title, body]}/>
                </div>
        )
    }
    if(visible && !error && !commentsAreLoading && comments) {
        return (
            <div className="" onClick={()=>setVisible(!visible)}>
                <div className="" onClick={()=>setVisible(!visible)}>
                    <PostBody data={[title, body]}/>
                    {console.log(comments)}
                    {comments.map(comment=><PostComment key={id} comment={comment}/>)}
                </div>
            </div>
        )
    }
    if(error)
    {
        return <div>Something went wrong</div>
    }
    return <h1>Loading...</h1>
}