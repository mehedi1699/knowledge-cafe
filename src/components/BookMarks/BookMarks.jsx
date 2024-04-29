import PropType from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const BookMarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <h3 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

BookMarks.propTypes ={
    bookmarks: PropType.array
}
export default BookMarks;