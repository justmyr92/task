const EmptyTask = () => {
    return (
        <div className="task-container">
            <div
                className="task"
                style={{
                    justifyContent: "center",
                }}
            >
                <p
                    style={{
                        color: "red",
                        fontSize: "1.5rem",
                        textAlign: "center",
                        textTransform: "uppercase",
                    }}
                >
                    No Tasks
                </p>
            </div>
        </div>
    );
};

export default EmptyTask;
