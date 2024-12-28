import Link from "next/link";


export default async function Home() {

  const url =await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const res =await url.json()
  console.log(res)
return (
  <div>
    <h1 className='text-5xl mb-5 text-center'>POSTS</h1>
     {
    res.map( (post:any, index:number ) =>(
      <div key={index}>
          
        <Link href={`${post.id}`}>
          <h1 className="text-2xl">{post.id}. {post.title}</h1>
          </Link>
      </div>
    ) )
  }
  </div>
)
}
