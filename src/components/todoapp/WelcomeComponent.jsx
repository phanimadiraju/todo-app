import React,{Component} from 'react'
import {Link} from "react-router-dom"

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

export default WelcomeComponent