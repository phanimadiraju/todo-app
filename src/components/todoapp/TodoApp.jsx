import React, { Component } from 'react'
import './TodoApp.css'
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom"

import WithNavigation from './WithNavigation.jsx'

//import WithParams from './WithParams.jsx'




class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = WithNavigation(LoginComponent);
        //const WelcomeComponentWithParams = WithParams(WelcomeComponent);
        return (
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<LoginComponentWithNavigation />} />
                    <Route path="/login" element={<LoginComponentWithNavigation />} />
                    <Route path="/welcome" element={<WelcomeComponent />} />
                    {/* <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} /> */}
                    <Route path="*" element={<ErrorComponent />} />
                    <Route path="/todos" element={<ToDosComponent />} />
                    <Route path="/logout" element={<LogoutComponent />} />
                </Routes>
                <Footer/>
            </BrowserRouter>

        )
    }
}

function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl</div>
}
class WelcomeComponent extends Component {
    render() {
        return (
            <div>
               <h1 className='h1-msg'>Welcome !!</h1>
            <div className='container'> You can manage your Todos <Link to="/todos">here</Link></div>
            </div>
        )
    }
}

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
                        <tr>
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
class LoginComponent extends Component {
    constructor() {
        super()
        this.state = {
            username: 'CTH_Phani',
            password: '',
            hasLoginFailed: false,
            showSuccessfulMessage: false
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.loginClickHandler = this.loginClickHandler.bind(this)
    }
    onChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    loginClickHandler() {
        if (this.state.username === "CTH_Phani" && this.state.password === "1234") {
            this.props.navigate('/welcome');
             this.setState({ hasLoginFailed: false })
             this.setState({ showSuccessfulMessage: true })
        } else {

            this.setState({ showSuccessfulMessage: false })
            this.setState({ hasLoginFailed: true })

        }
    }
    render() {
        return (
            <div className='login-container'>
                <h1>Login</h1>
                {this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid Credentials</div>}
                {this.state.showSuccessfulMessage && <div className='creds-correct'>Login Successful</div>}
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
                <ShowSuccessfulMessage showSuccessfulMessage={this.state.showSuccessfulMessage} /> */}
                Username : <input type="text" name="username" value={this.state.username} onChange={this.onChangeHandler} />
                Password : <input type="password" name="password" value={this.state.password} onChange={this.onChangeHandler} />
                <button onClick={this.loginClickHandler} className='btn btn-success'>Login</button>
            </div>
        );

    }
}

class Header extends Component{
    render(){
        return(
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark' >
                    <div><a href="https://ethames.ac.in/" className='navbar-brand'>Ethames_CTH</a></div>
                    <ul className='navbar nav'>
                        <li><Link className='nav-link' to ="/welcome">Home</Link></li>
                        <li><Link className='nav-link' to="/todos">Todos</Link></li>
                    </ul>
                    <ul className='navbar-nav navbar-collapse justify-content-end'>
                        <li><Link  className='nav-link' to="/login">Login</Link></li>
                        <li><Link  className='nav-link' to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
class Footer extends Component{
    render(){
        return(
            <footer className='footer'>
                <span className='text-muted'>All rights reserved 2022 @CTH-Ethames</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component{
    render(){
        return(
            <div>
                <h1>You are logged out </h1>
                <div className='container'>
                    Thank you for using our Application
                </div>
            </div>
        )
    }
}

export default TodoApp