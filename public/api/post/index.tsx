import axios from 'axios'

type Prp = {
  id: string
}

export function getPosts() {
  return axios
    .get('https://63dfa6ff8b24964ae0f16edb.mockapi.io/api/v1/comments')
    .then(res => res.data)
}
export function getUsers({ id }: Prp) {
  return axios
    .get(`https://63dfa6ff8b24964ae0f16edb.mockapi.io/api/v1/comments?id=${id}`)
    .then(res => res.data)
}

// api
// Get all comments: (axios.get)
// https://63dfa6ff8b24964ae0f16edb.mockapi.io/api/v1/comments

// Get a specific comment by its ID: (axios.get)
// https://63dfa6ff8b24964ae0f16edb.mockapi.io/api/v1/comments/1

// Create a new comment: (axios.post)
// https://63dfa6ff8b24964ae0f16edb.mockapi.io/api/v1/comments
// {
//    "comment": "Sample comment",
//    "avatar": "https://picsum.photos/200",
//    "first_name": "Hassan",
//    "last_name": "Motevali",
//    "username": "motehrani"
// }

// Edit an existing comment: (axios.put)
// https://63dfa6ff8b24964ae0f16edb.mockapi.io/api/v1/comments/11
// {
//    "comment": "Sample comment",
//    "avatar": "https://picsum.photos/200",
//    "first_name": "Hassan",
//    "last_name": "Motevali",
//    "username": "motehrani"
// }

// Delete an existing comment: (axios.delete)
// https://63dfa6ff8b24964ae0f16edb.mockapi.io/api/v1/comments/1
