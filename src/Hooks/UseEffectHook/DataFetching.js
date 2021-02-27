import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function Datafetching(props) {

  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromuttonClick, setIdFromButtonClick] = useState(1);

  const idChangeHandler = () => {
    setIdFromButtonClick(id);
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromuttonClick}`)
      .then(response => {
        console.log(response);
        setPost(response.data);
      })
      .catch(error => console.log(error));

  }, [idFromuttonClick])
  return (
    <>
      <label>Post Id</label><br />
      <input type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
      <button type="text" value={idFromuttonClick} onClick={idChangeHandler}>Get Post</button>
      <div>
        {post.title}
      </div>

      {/*<ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul>*/}
    </>
  )
}
