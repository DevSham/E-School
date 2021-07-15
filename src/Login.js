import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import img1 from "./components/app-form/img1.jpg";
import './components/app-form/Form.css';
import useForm from "./components/app-form/useForm";
import validate from "./components/app-form/ValidateInfo";

class Login extends Component{
    state = {}
    handleLoginSubmit = (e) => {
        e.preventDefault();

        const data = {
            username: this.username,
            password: this.password,
        };
        console.log('You are logged in successfully');

        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }
        postData('https://eschoolbackende.herokuapp.com/api/auth/login', data)
            .then(res => {
                console.log(res.token); // JSON data parsed by `data.json()` call
                localStorage.setItem('token', res.token);
                this.setState({
                    loggedIn: res.token
                });
            });
        postData('https://eschoolbackende.herokuapp.com/api/auth/register', data)
            .then(res => {
                console.log(res); // JSON data parsed by `data.json()` call
                // localStorage.setItem('token', res.first_name);
                this.setState({
                    registered: res.token
                });
            });

    }
    render(){
        if(this.state.loggedIn){
            return <Redirect to={'/home'}/>
        }
        return(
            <div className='form-container'>
                <div>

                    <img className='form-img' src={img1} alt='spaceship' />

                </div>
                <form onSubmit={this.handleLoginSubmit} className='form' >
                    <h1>
                        Welcome back
                    </h1>

                    <div className='form-inputs'>
                        <label className='form-label'>Username</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='Enter your username'
                            onChange= { e => this.username = e.target.value}
                        />
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Password</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                            onChange= { e => this.password = e.target.value}
                        />
                    </div>

                    <button className='form-input-btn' >
                        Login
                    </button>
                    <span className='form-input-login'>
                         Already have an account? Register <Link to='/register'>here</Link>
                     </span>
                    <div className="text-center">
                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                </form>
            </div>
        );
    }

}

export default Login;