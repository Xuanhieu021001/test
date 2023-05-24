import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';

function App() {
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
        <div className="App">
            <Nav />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to Hieu abc.
                </p>
                <Todo todos={todos} title={'All title'} handleDeleteTodo={handleDeleteTodo} />
                <Todo
                    todos={todos.filter((todo) => {
                        return todo.type === 'eric';
                    })}
                    title={'Eric title'}
                    handleDeleteTodo={handleDeleteTodo}
                />

                <input type="text" value={title} onChange={(e) => handleChangeInput(e)}></input>
                <button onClick={(e) => handleClick(e)}>Click me</button>
            </header>
        </div>
    );
}

export default App;
