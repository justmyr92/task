import Task from "./Task";
const Tasks = ({ deleteTask, task }) => {
    return (
        <div className="task-container">
            {task.map((task) => (
                <Task key={task.id} task={task} deleteTask={deleteTask} />
            ))}
        </div>
    );
};

export default Tasks;
