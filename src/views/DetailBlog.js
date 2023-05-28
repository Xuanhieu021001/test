import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './customize/fetch';
function DetailBlog() {
    let { id } = useParams();
    let history = useNavigate();
    const {
        data: dataDetailApp,
        loading,
        isError,
    } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
    console.log('check', dataDetailApp);
    function handleBack() {
        history('/blog');
    }

    return (
        <div>
            {loading && <span>loading...</span>}
            {loading === false && <button onClick={() => handleBack()}>Back</button>}
            <h2>{dataDetailApp.title}</h2>
            <span>{dataDetailApp.body}</span>
        </div>
    );
}
export default DetailBlog;
