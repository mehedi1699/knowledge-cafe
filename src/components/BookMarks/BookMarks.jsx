import PropType from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const BookMarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div>
                <h2 className='text-4xl my-4 text-center'>Reading Time: {readingTime}</h2>
            </div>
            <h3 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

BookMarks.propTypes ={
    bookmarks: PropType.array,
    readingTime: PropType.number
}
export default BookMarks;