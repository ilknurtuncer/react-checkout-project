import React from 'react'
import Button from "react-bootsrap/Button"
import Form from "react-bootstrap/Form"

const AddTask = () => {
const addNewTask = () => {
  const url = "https://63f72ba9e8a73b486af1ef5f.mockapi.io/api/tasks";
  try {
    await axios.post(url, newTask)
  } catch (error) {
    
  }
}


  return (
    <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        
        <div className="text-center">
          <Button variant="primary w-50" type="submit">
            SAVE
          </Button>
        </div>
      </Form> 
    </div>
  )
}

export default AddTask