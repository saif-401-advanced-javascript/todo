import React, { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SettingContext } from '../../context/setting';

function TodoList(props) {
  let { list, handleComplete, handelDelete } = props;
  const { isDisplayed, sorted } = useContext(SettingContext);
  if (!isDisplayed) {
    list = list.filter((item) => !item.complete);
  }
  useEffect(() => {});
  return (
    <section className='list'>
      {list.map((item) => (
        <Toast
          id='list-item'
          key={item._id}
          onClose={() => handelDelete(item._id)}
        >
          <Row id='testing'>
            <Toast.Header id='remove-padding'>
              <Col xs={6}>
                <Button
                  className={`complete-${item.complete.toString()}`}
                  onClick={() => handleComplete(item._id)}
                >
                  {item.complete ? 'Completed' : 'Pending'}
                </Button>
              </Col>
              <Col xs={4}>
                <strong className='mr-auto'>{item.assignee}</strong>
              </Col>
            </Toast.Header>
          </Row>
          <Toast.Body>
            <Row>
              <Col xs={6}>{item.text}</Col>
              <Col xs={6}>Difficulty {item.difficulty}</Col>
            </Row>
          </Toast.Body>
        </Toast>
      ))}
    </section>
  );
}

export default TodoList;
