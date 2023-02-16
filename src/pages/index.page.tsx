import { useState } from 'react'
import PostList1 from '@src/shared/components/post-list1'
import PostList2 from '@src/shared/components/post-list2'
import Post from '@src/shared/components/Post'
const Home = () => {
  const [currentPage, setCurrentPage] = useState(<PostList1 />)
  return (
    <div>
      <button onClick={() => setCurrentPage(<PostList1 />)}>Post List 1</button>
      <button onClick={() => setCurrentPage(<PostList2 />)}>Post List 2</button>
      <button onClick={() => setCurrentPage(<Post id="2" />)}>
        First Post
      </button>
      <br />
      {currentPage}
    </div>
  )
}

export default Home
