import React, { Component } from 'react'
import './TodoApp.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import ToDosComponent from './ToDosComponent'
import LoginComponent from './LoginComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'

import WithNavigation from './WithNavigation.jsx'

class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = WithNavigation(LoginComponent);
        
        return (
            <BrowserRouter>
            <HeaderComponent/>
                <Routes>
                    <Route path="/" element={<LoginComponentWithNavigation />} />
                    <Route path="/login" element={<LoginComponentWithNavigation />} />
                    <Route path="/welcome" element={<WelcomeComponent />} />
                    <Route path="*" element={<ErrorComponent />} />
                    <Route path="/todos" element={<ToDosComponent />} />
                    <Route path="/logout" element={<LogoutComponent />} />
                </Routes>
                <FooterComponent/>
            </BrowserRouter>

        )
    }
}

export default TodoApp