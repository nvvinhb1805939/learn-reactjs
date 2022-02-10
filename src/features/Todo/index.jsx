import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function TodoFeature(props) {
  const location = useLocation();
  const history = useHistory();
  const routeMatch = useRouteMatch();
  const initialTodoList = [
    {
      id: 1,
      action: 'Eating',
      status: 'new',
    },
    {
      id: 2,
      action: 'Sleeping',
      status: 'completed',
    },
    {
      id: 3,
      action: 'Coding',
      status: 'new',
    },
  ];
  const [todoList, setTodoList] = useState(initialTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });
  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || 'all');
  }, [location.search]);
  const handleTodoClick = index => {
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
  };
  const handleShowAll = () => {
    const queryParams = { status: 'all' };
    history.push({
      pathname: routeMatch.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompleted = () => {
    const queryParams = { status: 'completed' };
    history.push({
      pathname: routeMatch.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNew = () => {
    const queryParams = { status: 'new' };
    history.push({
      pathname: routeMatch.path,
      search: queryString.stringify(queryParams),
    });
  };
  const filteredList = useMemo(() => {
    return todoList.filter(todoItem => filteredStatus === 'all' || filteredStatus === todoItem.status);
  }, [filteredStatus, todoList]);

  const handleSubmit = formValues => {
    // const newTodoList = [...todoList];
    // newTodoList.push(formValues);
    // setTodoList(newTodoList);
    console.log('Form Values: ', formValues);
  };

  return (
    <div className='todo__container' style={{ textAlign: 'center' }}>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList todoList={filteredList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowCompleted}>Show Completed</button>
        <button onClick={handleShowNew}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
