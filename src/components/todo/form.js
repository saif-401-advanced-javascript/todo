import React, { useState } from 'react';
import BForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Form(props) {
  const { propHandleSubmit } = props;
  const [item, setItem] = useState({});

  const handleInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    propHandleSubmit(item);
    setItem({});
  };
  return (
    <section className='form'>
      <h3>Add Item</h3>
      <BForm onSubmit={handleSubmit}>
        <BForm.Group controlId='exampleForm.ControlInput1'>
          <BForm.Label>To Do Item</BForm.Label>
          <BForm.Control
            name='text'
            placeholder='Add To Do List Item'
            onChange={handleInputChange}
          />
        </BForm.Group>
        <BForm.Group controlId='formBasicRange'>
          <BForm.Label>Difficulty Rating</BForm.Label>
          <BForm.Control
            defaultValue='1'
            type='range'
            min='1'
            max='5'
            name='difficulty'
            onChange={handleInputChange}
          />
        </BForm.Group>
        <BForm.Group controlId='exampleForm.ControlInput1'>
          <BForm.Label>Assigned To</BForm.Label>
          <BForm.Control
            type='text'
            name='assignee'
            placeholder='Assigned To'
            onChange={handleInputChange}
          />
        </BForm.Group>
        <Button variant='primary' type='submit'>
          Add Item
        </Button>
      </BForm>
    </section>
  );
}

export default Form;
