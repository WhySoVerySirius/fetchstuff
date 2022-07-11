import React from "react";

export default function PostBody({data})
{
    return (
        <>
        <h3>{data[0]}</h3>
        <p>{data[1]}</p>
        </>
    )
}