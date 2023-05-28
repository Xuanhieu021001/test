import useFetch from './customize/fetch';
import './BlogApp.scss';
import { Link } from 'react-router-dom';
function Blog() {
    const { data: dataBlog, loading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts', false);
    const newDataBlog = dataBlog.slice(0, 9);

    return (
        <div className="card">
            {loading === true && <span style={{ width: '100%', fontSize: ' 20px' }}>Loading...</span>}
            {newDataBlog.map((blog, index) => {
                return (
                    <div className="card-body" key={index}>
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">{blog.body}</p>
                        <Link to={`/blog/${blog.id}`} className="btn btn-primary">
                            Go somewhere
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Blog;
