import React,{Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

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
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
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

export default LoginComponent