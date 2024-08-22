import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const EditPost = () => {

    const [data, setData] = useState({ userId: '', title: '', body: '' });
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => setData(response.json()))
          console.log(data);
      }, [id]); 

     

const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
  };
  return (
    <>
    <div
        className="container border p-3 rounded"
        style={{
          width: "500px",
          position: "absolute",
          top: "30%",
          left: "33%",
        }}
      >
        <h3>Update Post</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mt-2"
            type="text"
            placeholder="user id"
            aria-label="default input example"
            onChange={(e) => setData({ ...data, userId: e.target.value })}
            value={data.userId}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="title"
            aria-label="default input example"
            onChange={(e) => setData({ ...data, title: e.target.value })}
            value={data.title}

          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="body"
            aria-label="default input example"
            onChange={(e) => setData({ ...data, body: e.target.value })}
            value={data.body}

          />
          <div className="d-flex mt-3 justify-content-between">
            <button className="btn btn-success " type="submit">
              Update post
            </button>
            <Link to="/">
              <button className="btn btn-danger">Close</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditPost