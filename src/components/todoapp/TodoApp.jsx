import React, { Component } from 'react'
import './TodoApp.css'

class TodoApp extends Component {
    render() {
        return (
            <div>
                <LoginComponent />
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
            hasLoginFailed: 'false',
            showSuccessfulMessage: 'true'
        }
        //this.userNameChangeHandler = this.userNameChangeHandler.bind(this)
        //this.passwordChangeHandler = this.passwordChangeHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.loginClickHandler = this.loginClickHandler.bind(this)
    }
    onChangeHandler = (event) => {
        //console.log(this.state)
        this.setState(
            {
                [event.target.name]: event.target.value

            }
        )
    }

    loginClickHandler() {
        if (this.state.username === "CTH_Phani" && this.state.password === "1234") {
            //console.log("success")
            this.setState({ hasLoginFailed: false })
            this.setState({ showSuccessfulMessage: true })
        } else {
            //console.log("failure")
            this.setState({ showSuccessfulMessage: false })
            this.setState({ hasLoginFailed: true })

        }
        // userNameChangeHandler = (e) => {
        //     console.log(e.target.name)
        //     this.setState({ [e.target.name]: e.target.value })

        // }
        // passwordChangeHandler = (e) => {
        //     console.log(e.target.name)
        //     this.setState({ [e.target.name]: e.target.value })

        }
        render() {
            return (
                <div className='login-container'>
                    <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                    <ShowSuccessfulMessage showSuccessfulMessage={this.state.showSuccessfulMessage}/>
                    Username : <input type="text" name="username" value={this.state.username} onChange={this.onChangeHandler} />
                    Password : <input type="password" name="password" value={this.state.password} onChange={this.onChangeHandler} />
                    <button onClick={this.loginClickHandler}>Login</button>
                </div>
            );

        }
    }

function ShowInvalidCredentials(props) {

    if (props.hasLoginFailed) {
        return <div className='creds-error'>Invalid Credentials</div>
    }
    return null;
}

function ShowSuccessfulMessage(props) {
    if (props.showSuccessfulMessage) {
        return <div className='creds-correct'>Login Successful</div>
    }
    return null;
}



export default TodoApp