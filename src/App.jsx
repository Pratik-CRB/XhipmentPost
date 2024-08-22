import Navbar from "./components/Navbar"
import Post from "./components/Post"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import CreatePost from "./components/CreatePost"
import EditPost from "./components/EditPost"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/create" element={<CreatePost/>}/>
      <Route path="/editPost/:id" element={<EditPost/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
