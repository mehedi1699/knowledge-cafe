import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'



function App() {

const [bookmarks,setBookmarks] =useState([])

const handleAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks, blog]
  setBookmarks(newBookmarks);
}

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto '>
        <Blogs handleAddToBookmark = {handleAddToBookmark}></Blogs>
        <BookMarks bookmarks ={bookmarks}></BookMarks>
      </div>
    </>
  )
}

export default App
