import React, {useContext} from "react";
import { useState } from "react";
import { PostsContext } from "./Layout";
import PostBody from "./PostBody";
import PostComment from "./PostComment";

export default function Post ({data})
{
    const posts = useContext(PostsContext);
    const [visible, setVisible] = useState(false);
    const {id, name, username} = data;

    const userPosts = posts.filter(post=>post.userId === id);

    if(!visible) {

        return (
            <>
                <div className="" onClick={()=>setVisible(!visible)} >{id}# Name: {name} Username: {username}</div>
            </>
        )
    }
    return (
        <>
            <div className="" onClick={()=>setVisible(!visible)} >{id}# Name: {name} Username: {username}</div>
            {userPosts.map(post=>{return(<><PostComment data={post.title}/><PostBody data={post.body}/></>)})}
        </>
    )
}