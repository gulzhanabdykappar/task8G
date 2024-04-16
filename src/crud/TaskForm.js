import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addTask } from './store';
import '../App.css';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTask({ title }));
        setTitle('');
    };

    return (
        <div className="task-form-container mt-5">
            <form onSubmit={handleSubmit} className="custom-form">
                <div className="form-group mb-3">
                    <input type="text" placeholder="Task title" value={title} onChange={e => setTitle(e.target.value)}
                           className="form-control task-input custom-input"/>
                </div>
                <button type="submit" className="btn custom-btn btn-outline-primary">Add</button>
            </form>
        </div>


    );
};

export default TaskForm;
