import React from "react";

export default function PostComment({comment})
{
    const {name, email, body} = comment
    
    return (
        <div>
            <div><strong>{name}</strong></div>
            <div>{body}</div>
            <div>{email}</div>
        </div>
    )
}