import React from 'react';

function TodoList(props) {
  const { list, handleComplete } = props;
  console.log('this is the item', list);
  return (
    <ul>
      {list.map((item) => (
        <li className={`complete-${item.complete.toString()}`} key={item._id}>
          <span onClick={() => handleComplete(item._id)}>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

// class TodoList extends React.Component {

//   render() {
//     return (
//       <ul>
//         {this.props.list.map(item => (
//           <li
//             className={`complete-${item.complete.toString()}`}
//             key={item._id}
//           >
//             <span onClick={() => this.props.handleComplete(item._id)}>
//               {item.text}
//             </span>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

// export default TodoList;
