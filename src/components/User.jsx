import React, {useContext, useState} from "react";
import { PostsContext } from "./Layout";
import Post from "./Post";

export default function User({user})
{
    const posts = useContext(PostsContext);
    const [visible, setVisible] = useState(false);
    const userPosts = posts.filter(post=>post.userId === user.id);

    if(visible) {
        return (
            <>
            <div className="user-button" onClick={()=>setVisible(!visible)}>
                {user.name}
            </div>
                {userPosts.map(post=><Post key={post.id} data={post}/>)}
            </>
        )
    }
    return (
        <div className="user-button" onClick={()=>setVisible(!visible)}>{user.name}</div>
    )
}