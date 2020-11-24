import React, { useEffect, useState, useContext } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../../hooks/useAjax';
import { SettingContext } from '../../context/setting.js';
import Pages from '../pagination/pagination.js';

import './todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = (props) => {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState([]);
  const [page, setPage] = useState(1);
  const [active, setActive] = useState(1);
  const { toggleComplete, deleteItem, getItemsP } = useAjax(
    todoAPI,
    setList,
    list
  );
  const { getItems, addItem } = useAjax(todoAPI, setTotal, total);

  const siteContext = useContext(SettingContext);

  useEffect(() => {
    getItems();
  }, [list]);

  useEffect(() => {
    getItemsP(siteContext.numberOfItems, page);
  }, [page]);

  return (
    <>
      <header>
        <h2>
          There are {total.filter((item) => !item.complete).length} Items To
          Complete
        </h2>
      </header>

      <section className='todo'>
        <div>
          <TodoForm propHandleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
            handelDelete={deleteItem}
          />
          <Pages
            page={page}
            changePage={setPage}
            list={total}
            active={active}
            changeActive={setActive}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
