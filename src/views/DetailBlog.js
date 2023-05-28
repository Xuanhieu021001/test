import { useParams } from 'react-router-dom';

function DetailBlog() {
    let { id } = useParams();

    return <h2>Render detail blog with id = {id}</h2>;
}
export default DetailBlog;
