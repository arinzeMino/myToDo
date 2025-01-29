import React, { useState } from 'react';
import './todo.css';

const Todos = () => {
    const [addTask, setAddTask] = useState('');
    const [theTask, setTheTask] = useState([]);
    console.log(theTask);

    const handleAddBtn = () => {
        const id = theTask.length + 1;
        setTheTask((prev) => [...prev, { id:id, theTask: addTask }]);
        setAddTask('');
    };

    const deleteTask = (id) =>{ 
        setTheTask(theTask.filter((i)=> i.id !==id))
    }

    return (
        <div className="todo">
            <h2>MY TODO</h2>
            <input 
                type="text" 
                placeholder="Create a task...." 
                value={addTask} 
                onChange={(e) => setAddTask(e.target.value)} 
            />
            <div className="addBtb">
                <button onClick={handleAddBtn}>Add Tasks</button>
            </div>
            <div className="task">
                {theTask.map((task) => (
                    <div className="tasks" key={task.id}>
                        <h2>{task.theTask}</h2>
                        <div className="btnDual">
                            <button style={{ backgroundColor: 'blue' }}>Edit</button>
                            <button style={{ backgroundColor: 'red' }} onClick={() =>deleteTask(task.id) } >Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Todos;
