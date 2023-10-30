import TodoItem from "./TodoItem"


function Todos({todos}) {
    console.log('Todos rendered')
    return (
        <ul>
        {todos.map((todo,index) =><TodoItem key={index}  todo={todo} />)}
      </ul>
    )
}

export default Todos