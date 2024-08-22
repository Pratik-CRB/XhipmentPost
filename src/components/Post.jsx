import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Post = () => {
  const [data, setData] = useState([]);
  const [id, setId] =useState("")

    // to mapping all post 
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url).then((res) => {
      res.json().then((resp) => {
        console.log(resp);
        setData(resp);
      });
    });
  }, []);

  

 
  // function to delete post

  const handleDeletePost = (id)=>{
    console.log(id)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      }).then(() => {
        setData((prevData) => prevData.filter((post) => post.id !== id));
      });
  }

  return (
    <>
      <div className="row">
        {data.map((post, idx) => {
          return (
            <div className="card m-5 col-md-4" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <div className="d-flex justify-content-between align-items-end">
                  <Link to={`/editPost/${post.id}`}><button className="btn btn-primary"
                  >Edit</button></Link>
                  <button className="btn btn-danger" onClick={()=>{
                    handleDeletePost(post.id)
                  }}>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Post;
