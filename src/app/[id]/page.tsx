import React from 'react'

const DynamicBook = async (props:any) => {
const url =await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}`)
  const res =await url.json()
  console.log('singlebookresponse',res)
  const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.params.id}`);
  const comments = await commentsRes.json();
  console.log(comments)
  return (
    <div>

      <h1 className='text-4xl'>{props.params.id}. {res.title} <br />
      </h1>
        <p className='pl-7 pt-5'>{res.body} <br /></p>
        <h2 className='text-2xl mt-2 mb-2'>Comments</h2>
      <ul>
        {comments.map((comment:any) => (
          <li key={comment.id}>
            <strong>{comment.id}.  {comment.email}</strong>: <br /> {comment.body}
          </li>
        ))}
      </ul>
    </div>
    
  )
  
}
export default DynamicBook
