import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { TodoHeader } from '../Headers/TodoHeader';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';


export const TodoApp = memo(props => {
  console.log('main index')
  return (
    <div>
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </div>
  )
})

TodoApp.propTypes = {

}
