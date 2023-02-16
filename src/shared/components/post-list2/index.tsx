import { useQuery } from '@tanstack/react-query'
import { getPosts } from 'public/api/post'

export default function PostList2() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  if (postsQuery.status === 'loading') return <h1>Loading...</h1>
  if (postsQuery.status === 'error') {
    return <h1>{JSON.stringify(postsQuery.error)}</h1>
  }
  return (
    <div>
      <h1>Post List 2</h1>
      <ol>
        {postsQuery.data.map(post => (
          <li key={post.id}>{post.comment}</li>
        ))}
      </ol>
    </div>
  )
}
