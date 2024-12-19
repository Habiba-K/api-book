import Link from "next/link";


export default async function Home() {
  const url =await fetch("https://simple-books-api.glitch.me/books")
  const res =await url.json()
  console.log(res)
  return (

  <div>
    {
      res.map( (book:any ) =>(
        <div>
          <Link href={`${book.id}`}>
            <h1 className="text-5xl">{book.id}. {book.name}</h1>
          </Link>
            <p className="text-4xl">{book.type}</p><br />
           
        </div>
      ) )
    }
  </div>
  );
}
