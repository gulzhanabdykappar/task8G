import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, Button, Modal } from 'react-bootstrap';
import TaskUpdateForm from './TaskUpdateForm';
import { deleteTask } from './store';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const [selectedTask, setSelectedTask] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleDelete = id => {
        dispatch(deleteTask(id));
    };

    const handleShowModal = task => {
        setSelectedTask(task);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedTask(null);
        setShowModal(false);
    };

    return (
        <div className="task-list-container">
            <h2 className="task-list-heading">Advertising</h2>
                {tasks.map(task => (
                    <div className="col-lg-12 col-md-8 col-sm-12 mb-4" key={task.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{task.title}</h5>
                                <div className="task-buttons">
                                    <button type="button" className="btn btn-danger btn-sm ml-2"
                                            onClick={() => handleDelete(task.id)}>Delete
                                    </button>
                                    <button type="button" className="btn btn-success btn-sm ml-2"
                                            onClick={() => handleShowModal(task)}>Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedTask && <TaskUpdateForm task={selectedTask} closeModal={handleCloseModal}/>}
                </Modal.Body>
            </Modal>
        </div>

    );
};

export default TaskList;
