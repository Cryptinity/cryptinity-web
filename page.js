import Link from 'next/link'
export default function Feed() {
  const posts = [
    {id:1,author:'Cryptinity',text:'Welcome to the future.'},
    {id:2,author:'Finance Bot',text:'BTC moving up.'}
  ]
  return (
    <main>
      <h2>News Feed</h2>
      <div>
        {posts.map(p=>(
          <div key={p.id} className='card'>
            <strong>{p.author}</strong>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
