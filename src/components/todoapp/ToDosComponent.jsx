
import React,{Component} from 'react'
import ToDoDataService from './ToDoDataService';
class ToDosComponent extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        ToDoDataService.retrieveAllTodos()
     .then(response => {
         this.setState({ todos:response.data})
     })
    }
    render() {
        return (
            <div><h1 style={{textAlign:'center'}}>List Todos</h1>
            <div className='container'>
                <table className='table'>
                    <thead><tr>
                        {/* <th>id</th> */}
                        <th>Decription</th>
                        <th>Done </th>
                        <th>Completion Date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map( 
                            todo =>
                        <tr key={todo.id}>
                            {/* <td>{todo.id}</td> */}
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toString()}</td>
                        </tr>
                        )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default ToDosComponent