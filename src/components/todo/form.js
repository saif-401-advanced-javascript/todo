import React from 'react';
import BForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from '../../hooks/useForm';

function Form(props) {
  const { propHandleSubmit } = props;

  const [handleSubmit, handleInputChange] = useForm(propHandleSubmit);

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

// <If condition={Object.keys(edit).length}>
// <Then>
// <h3>Update Item</h3>
// <BForm onSubmit={propHandleEdit}>
//   <BForm.Group controlId='exampleForm.ControlInput1'>
//     <BForm.Label>To Do Item</BForm.Label>
//     <BForm.Control
//       name='text'
//       placeholder='Add To Do List Item'
//       onChange={(e) =>
//         setItem({ ...item, [e.target.name]: e.target.value })
//       }
//       value={edit.text}
//     />
//   </BForm.Group>
//   <BForm.Group controlId='formBasicRange'>
//     <BForm.Label>Difficulty Rating</BForm.Label>
//     <BForm.Control
//       type='range'
//       min='1'
//       max='5'
//       name='difficulty'
//       onChange={(e) =>
//         setItem({ ...item, [e.target.name]: e.target.value })
//       }
//       value={edit.difficulty}
//     />
//   </BForm.Group>
//   <BForm.Group controlId='exampleForm.ControlInput1'>
//     <BForm.Label>Assigned To</BForm.Label>
//     <BForm.Control
//       type='text'
//       name='assignee'
//       placeholder='Assigned To'
//       onChange={(e) =>
//         setItem({ ...item, [e.target.name]: e.target.value })
//       }
//       value={edit.assignee}
//     />
//   </BForm.Group>
//   <Button variant='warning' type='submit'>
//     Update
//   </Button>
// </BForm>
// </Then>
