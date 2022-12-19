import React from "react";
import { useState } from "react";
import AddTask from "./Add-Task";
import EmptyTask from "./Empty-Task";
import Header from "./Header";
import Tasks from "./Tasks";

const Main = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [task, setTask] = useState([]);
    const addATask = (tasks) => {
        const id = Math.floor(Math.random() * 100000) + 1;
        const newTask = { id, ...tasks };
        setTask([...task, newTask]);
    };
    const deleteTask = (id) => {
        setTask(task.filter((task) => task.id !== id));
    };
    return (
        <section className="main">
            <div className="container">
                <Header
                    onAdd={() => setShowAddTask(!showAddTask)}
                    showAdd={showAddTask}
                />
                {showAddTask && (
                    <AddTask onAdd={addATask} showAdd={showAddTask} />
                )}
                {task.length > 0 ? (
                    <Tasks deleteTask={deleteTask} task={task} />
                ) : (
                    <EmptyTask />
                )}
            </div>
        </section>
    );
};

export default Main;
