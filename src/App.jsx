import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'



function App() {

const [bookmarks,setBookmarks] =useState([])
const [readingTime,setReadingTime] = useState(0)

const handleAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks, blog]
  setBookmarks(newBookmarks);
}

const handleMarkAsRead = (time,id) =>{
  setReadingTime(readingTime + time);
  // remove from bookmark
  // console.log('remove bookmark',id)
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
  setBookmarks(remainingBookmarks)
}

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto '>
        <Blogs handleAddToBookmark = {handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <BookMarks bookmarks ={bookmarks}
        readingTime= {readingTime}
        ></BookMarks>
      </div>
    </>
  )
}

export default App
