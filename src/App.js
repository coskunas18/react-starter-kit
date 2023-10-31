
import {useReducer } from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {

  function reducer(state,action){
    switch (action.type) {
      case 'SET_TODO':
        return {
          ...state,
          todo:action.value
        }

        case 'ADD_TODO':
          return {
            ...state,
            todo:'',
            todos:[
              ...state.todos,
              action.todo
           ]
          }
    }
  }

  const [state, dispatch] = useReducer(reducer,{
    todos:[],
    todo:''
  })

  const submitHandle = e => {
    e.preventDefault()

    dispatch({
      type:'ADD_TODO',
      todo:state.todo
    })
  }

  const onChange = e => {
    dispatch({
      type:'SET_TODO',
      value:e.target.value
    })
  }

  return (
    <>
    <Header/>
    <h1>Todo App</h1>
    <AddTodo submitHandle={submitHandle} onChange={onChange} todo = {state.todo} />
    <Todos todos={state.todos} />
    </>
  );
}

export default App;
