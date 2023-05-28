import { useState } from 'react';

function AddNewBlog() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    function handleSubmit() {
        console.log(title, body);
    }
    return (
        <div>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                ></input>
            </div>
            <div>
                <label>Body</label>
                <input
                    type="text"
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value);
                    }}
                ></input>
            </div>
            <button onClick={() => handleSubmit()}>Submit</button>
        </div>
    );
}
export default AddNewBlog;
