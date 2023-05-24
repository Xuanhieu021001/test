function Todo(props) {
    // const todos = props.todos;
    const { title, todos, handleDeleteTodo } = props;

    const handleDelete = function (id) {
        handleDeleteTodo(id);
    };
    return (
        <ul className="todos-container">
            <h2>{title}</h2>
            {todos.map((todo, index) => {
                return (
                    <li key={index}>
                        {todo.title}
                        &nbsp; &nbsp;<span onClick={() => handleDelete(todo.id)}>x</span>
                    </li>
                );
            })}
        </ul>
    );
}
export default Todo;
