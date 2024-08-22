import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreatePost = () => {
  const [values, setValue] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(values)
        ,
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
        <h3>Create Post</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mt-2"
            type="text"
            placeholder="user id"
            aria-label="default input example"
            onChange={(e) => setValue({ ...values, userId: e.target.value })}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="title"
            aria-label="default input example"
            onChange={(e) => setValue({ ...values, title: e.target.value })}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="body"
            aria-label="default input example"
            onChange={(e) => setValue({ ...values, body: e.target.value })}
          />
          <div className="d-flex mt-3 justify-content-between">
            <button className="btn btn-primary " type="submit">
              Create post
            </button>
            <Link to="/">
              <button className="btn btn-danger">Close</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
