import Link from 'next/link'

export default function Home( {posts} ){

  return(
    <div>
      <h1>Hello From The Home Page!</h1>
      
    </div>
  )

}

export async function getStaticProps(){

  const res = await fetch('https://buysellrecycle.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
          query HomePageQuery {
            posts {
              nodes {
                slug
                title
              }
            }
          }
          `,
      })
  })

  const json = await res.json()

  return {
    props: {
        posts: json.data.posts,
    },
  }

}