import React, {useContext, useState} from "react";
import { PostsContext } from "./Layout";
import Post from "./Post";

export default function User({user, active, click})
{
    const posts = useContext(PostsContext);
    const [visible, setVisible] = useState(false);
    const userPosts = posts.filter(post=>post.userId === user.id);
    const [activeComment, setActiveComment] = useState('');
    const commentHandle = (id) => setActiveComment(id);

    if(visible && active === user.id) {
        return (
            <>
            <div className="user-button" onClick={()=>setVisible(!visible)}>
                {user.name}
            </div>
                {userPosts.map(post=><Post key={post.id} data={post} active={activeComment} handle={commentHandle}/>)}
            </>
        )
    }
    return (
        <div className="user-button" onClick={()=>{setVisible(!visible);click(user.id)}}>{user.name}</div>
    )
}