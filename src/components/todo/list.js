import React from 'react';

function TodoList(props) {
  const { list, handleComplete } = props;
  return (
    <ul>
      {list.map((item) => (
        <li className={`complete-${item.complete.toString()}`} key={item._id}>
          <span onClick={() => handleComplete(item._id)}>
            {item.text} Assigned to {item.assignee}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
