const Task = ({ task, deleteTask }) => {
    return (
        <div className="task">
            <div className="content">
                <h3>{task.text}</h3>
                <p>
                    {task.day} at {task.time}
                </p>
            </div>
            <button type="button" onClick={() => deleteTask(task.id)}>
                X
            </button>
        </div>
    );
};

export default Task;
