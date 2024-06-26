import PropTypes from 'prop-types';
import { IoBookmarks } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark ,handleMarkAsRead}) => {
    const {id,title,cover,author,author_img,reading_time,posted_date,hashtags} = blog;
    return (
        <div className='mb-20 space-y-2'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex p-4'>
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={ () => handleAddToBookmark(blog)}
                    className='ml-2 text-2xl'><IoBookmarks></IoBookmarks></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
               {
                hashtags.map( (hash,idx) => <span key={idx} className='ml-2'><a >{hash}</a></span>)
               } 
            </p>
            <button onClick={() => handleMarkAsRead(reading_time,id)} className='text-purple-600 font-bold underline'>Mark as Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;