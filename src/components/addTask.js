import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [day, setday] = useState("");
    const [time, setTime] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        //
        onAdd({ text, day, time });
        setText("");
        setday("");
        setTime("");
    };
    return (
        <form className="add-task" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="inputText">Task</label>
                <input
                    type="text"
                    id="inputText"
                    placeholder="Input Task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />
            </div>
            <div className="row">
                <div className="form-control">
                    <label htmlFor="inputDate">Day</label>
                    <input
                        type="date"
                        id="inputday"
                        value={day}
                        onChange={(e) => setday(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="inputTime">Time</label>
                    <input
                        type="time"
                        name="inputTime"
                        id="inputTime"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
            </div>

            <input type="submit" value="Submit" className="submitBtn" />
        </form>
    );
};

export default AddTask;
