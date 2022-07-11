import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import { createContext } from "react";

export const PostsContext = createContext();

export default function Layout()
{
    const [users, setUsers] = useState(null);
    const [usersAreLoading, setUsersAreLoading] = useState(true);
    const [posts, setPosts] = useState(null);
    const [postsAreLoading, setPostsAreLoading] = useState(true);
    const [error, setError] = useState('');
    
    useEffect(()=>{
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res=>setUsers(res.data))
            .catch(err=>setError(err))
            .finally(()=>setUsersAreLoading(false));

        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>setPosts(res.data))
            .catch(err=>setError(err))
            .finally(()=>setPostsAreLoading(false));
        },
        []
    )

    if(usersAreLoading && postsAreLoading)
    {
        return <h1>Loading...</h1>
    }
    if(error === '' && users && posts) {
        return (
            <PostsContext.Provider value={posts}>
                {console.log(users)}
                {users.map(user=><Post data={user} key={user.id}/>)}
            </PostsContext.Provider>
        )
    }
    if(error !== '') {
        return (
            <h1>Opps</h1>
        )
    }
}