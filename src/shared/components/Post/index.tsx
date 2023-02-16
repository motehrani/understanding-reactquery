import { useQuery } from '@tanstack/react-query'
import { type } from 'os'
import { getUsers } from 'public/api/post'

type Prp = {
  id: number
}

export default function Post({ id }: Prp) {
  const postQuery = useQuery({
    queryKey: ['posts', id],
    queryFn: () => getUsers({ id }),
  })
  // const userQuery = useQuery({
  //   queryKey: ["users", postQuery?.data?.userId]
  //   queryFn: () => getUsers(postQuery.data.userId)
  // })

  if (postQuery.status === 'loading') return <h1>Loading...</h1>
  if (postQuery.status === 'error') {
    return <h1>{JSON.stringify(postQuery.error)}</h1>
  }
  return (
    <>
      <h1>
        {postQuery.data.username}
        <small>
          {postQuery.data.first_name}
          {/* {userQuery.isLoading
            ? 'Loading User...'
            : useQuery.isError
            ? 'Error Loading User'
            : useQuery.data.first_name} */}
        </small>
      </h1>
      <p>{postQuery.data.body}</p>
    </>
  )
}
