import React, { useState } from 'react';
import styles from './ToDoList.module.css';

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Taks a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');   
        }
    }

    function deleteTask(index) {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]] = 
            [updateTasks[index - 1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index + 1]] = 
            [updateTasks[index + 1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }

    return (
        <div className={styles["to-do-list"]}>
            <h1>To-Do-List</h1>
            <div>
                <input 
                    type="text" 
                    placeholder='Enter a task...'
                    value={newTask}
                    onChange={handleInputChange} />
                <button
                    className={styles["add-button"]}
                    onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className={styles['text']}>{task}</span>
                        <button
                            className={styles["delete-button"]}
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className={styles["move-button"]}
                            onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button
                            className={styles["move-button"]}
                            onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;