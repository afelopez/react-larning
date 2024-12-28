import { useContext } from 'react';

import { TodoList } from '../todo/TodoList';
import { TodoCounter } from '../todo/TodoCounter';
import { TodoSearch } from '../todo/TodoSearch';
import { CreateButton } from '../todo/CreateButton';
import { TodoItem } from '../todo/TodoItem';
import { TodoLoading } from '../todo/TodoLoading';
import { Error } from '../todo/Error'; 
import { TodoEmpty } from '../todo/TodoEmpty';
import { TodoContext } from '../todo/Context';  

function AppUI() {

  const {loading, error, filteredTodos, totalTodos} = useContext(TodoContext);
  return (
    <div className='container'>
      <TodoCounter />
      <TodoSearch />
      <TodoList> 
          {loading && <TodoLoading />}
          {error && <Error />}
          {!loading &&!totalTodos  && <TodoEmpty />}
          {filteredTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
            />
          ))}
      </TodoList>        
      <CreateButton />
    </div>  
  );
}

export { AppUI };