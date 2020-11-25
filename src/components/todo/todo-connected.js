/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../../hooks/useAjax';
import usePagination from '../../hooks/usePagintaion.js';
import { SettingContext } from '../../context/setting.js';
import Pages from '../pagination/pagination.js';
import Setting from '../setting/setting-editor.js';

import './todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = (props) => {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState([]);
  const [page, setPage] = useState(1);
  const { getItemsP } = usePagination(setList, list);
  const { getItems, addItem, toggleComplete, deleteItem } = useAjax(
    todoAPI,
    setTotal,
    total
  );

  const defaultPage = () => {
    setPage(1);
  };
  const siteContext = useContext(SettingContext);

  useEffect(() => {
    getItems();
    defaultPage();
  }, []);

  useEffect(() => {
    getItemsP(siteContext.numberOfItems, page, total);
  }, [page]);

  useEffect(() => {
    getItemsP(siteContext.numberOfItems, page, total);
  }, [total]);

  useEffect(() => {
    if (siteContext.sorted === 'difficulty') {
      let newTotal = total.sort((a, b) => {
        return b.difficulty - a.difficulty;
      });
      setTotal(newTotal);
    }
    getItemsP(siteContext.numberOfItems, page, total);
  }, [siteContext.sorted]);

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
          <Pages page={page} changePage={setPage} list={total} />
        </div>
        <div id='setting'>
          <Setting />
        </div>
      </section>
    </>
  );
};

export default ToDo;
