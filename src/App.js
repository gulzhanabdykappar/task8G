import React from 'react';
import TaskList from './crud/TaskList';
import TaskForm from './crud/TaskForm';
import { Container } from 'react-bootstrap';



function App() {
    return (
        <Container>
            <TaskForm/>
            <TaskList/>
        </Container>
    );
}

export default App;
