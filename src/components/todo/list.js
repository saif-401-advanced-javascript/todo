import React from 'react';
import Button from 'react-bootstrap/Button';

function TodoList(props) {
  const { list, handleComplete, handelDelete, handleEdit } = props;
  return (
    <ul>
      {list.map((item) => (
        <li className={`complete-${item.complete.toString()}`} key={item._id}>
          <span onClick={() => handleComplete(item._id)}>
            {item.text} Assigned to {item.assignee}
          </span>
          <Button variant='warning' onClick={() => handleEdit(item)}>
            Edit
          </Button>
          <Button variant='danger' onClick={() => handelDelete(item._id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
