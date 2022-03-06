
import React,{Component} from 'react'
class ToDosComponent extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id: 1,
                    description: 'Learn React',
                    done:false,
                    completionDate:new Date() 
                },
                {
                    id: 2,
                    description: 'Learn Spring boot',done:false,completionDate:new Date() 
                }, {
                    id: 3,
                    description: 'Become Full Stack',done:false,completionDate:new Date() 
                }
            ]
        }
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
                            <td>{todo.completionDate.toString()}</td>
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