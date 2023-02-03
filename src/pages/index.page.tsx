import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const POSTS = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' },
]

function wait(duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration))
}
// about accessing functions and constant, what if
// I move POSTS & waite() down here before return?
const Home = () => {
  const queryClient = useQueryClient()
  // and this is essentially is going return that we create
  // in app.page.tsx,   const queryClient = new QueryClient()
  const postsQuery = useQuery({
    queryKey: ['posts'],
    // query key, and this is going to be a
    // key that Uniquely identify this query
    queryFn: () => wait(1000).then(() => [...POSTS]),
    // query function, this is a thing that is going to run
    // to actually query our data and always accept a
    // promise in it's return. so it's any asynchronous
    // code, that's why it accept a promise
  })

  const newPostMutation = useMutation({
    mutationFn: title => {
      return wait(1000).then(() =>
        POSTS.push({ id: crypto.randomUUID(), title }),
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    },
  })
  // how to solve this error?

  if (postsQuery.isLoading) return <h1>Loading...</h1>
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>
  return (
    <div>
      {postsQuery.data.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate('New Post')}
      >
        Add New
      </button>
    </div>
  )
}

export default Home
