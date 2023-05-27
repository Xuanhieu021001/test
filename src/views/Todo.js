import { useState } from 'react';

function Todo() {
    const [title, setTitle] = useState('');
    const [todos, setTodo] = useState([
        { id: 1, title: 'Học lập trình', type: 'eric' },
        { id: 2, title: 'Xem tivi', type: 'eric' },
        { id: 3, title: 'Lướt facebook', type: 'hary' },
    ]);
    const [id, setId] = useState(4);
    const handleChangeInput = function (e) {
        setTitle(e.target.value);
    };
    const handleClick = function (e) {
        const newTodo = { id: id, title: title };
        setTodo([...todos, newTodo]);
        setId(id + 1);
        console.log(todos);
    };
    const handleDeleteTodo = function (id) {
        let currentTodo = todos;
        currentTodo = currentTodo.filter((todo) => {
            return todo.id !== id;
        });
        setTodo(currentTodo);
    };
    return (
        <ul className="todos-container">
            <h2>All todos</h2>
            {todos.map((todo, index) => {
                return (
                    <li key={index}>
                        {todo.title}
                        &nbsp; &nbsp;<span onClick={() => handleDeleteTodo(todo.id)}>x</span>
                    </li>
                );
            })}
            <input type="text" value={title} onChange={(e) => handleChangeInput(e)}></input>
            <button onClick={(e) => handleClick(e)}>Click me</button>
        </ul>
    );
}
export default Todo;
