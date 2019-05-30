import React, { Component } from 'react';
import axios from 'axios';
import { updateUser } from '../redux/userReducer';
import { connect } from 'react-redux';



class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        axios.get('/auth/user').then((res) => {
            this.props.updateUser(res.data)
            this.props.history.push('/details')
        })
    }

    handleLoginInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUserLogin = (e) => {
        e.preventDefault()
        const { username, password } = this.state
        axios.post('/auth/login', {username, password}).then((res) => {
            this.props.history.push('/details')
        })
            .catch((err) => {
            console.log(err)
            })
        e.target.username.value = ''
        e.target.password.value = ''
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleUserLogin}>
                    <input
                        type='text'
                        name='username'
                        placeholder='username'
                        onChange={this.handleLoginInfoUpdate} />
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        onChange={this.handleLoginInfoUpdate} />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {updateUser})(Login);