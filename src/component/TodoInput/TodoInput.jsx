import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function TodoInput({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() === '') return; 
    onAddTask(newTask);
    setNewTask(''); 
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Group controlId="taskInput">
        <Form.Label>Add a new task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">
        Add Task
      </Button>
    </Form>
  );
}
