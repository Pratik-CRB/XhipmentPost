import React from 'react'
import Navbar from './Navbar'
import Post from './Post'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Link to="/create"><button className='btn btn-success mt-4 ms-5'>Create Post</button>
        </Link>
        <Post/>
    </>
  )
}

export default Home