import { useQuery } from '@tanstack/react-query'
import { getPosts } from 'public/api/post'

export default function PostList1() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    refetchInterval: 1000,
  })

  if (postsQuery.status === 'loading') return <h1>Loading...</h1>
  if (postsQuery.status === 'error') {
    return <h1>{JSON.stringify(postsQuery.error)}</h1>
  }
  return (
    <div>
      <h1>Post List 1</h1>
      <ol>
        {postsQuery.data.map(post => (
          <li key={post.id}>{post.comment}</li>
        ))}
      </ol>
    </div>
  )
}
