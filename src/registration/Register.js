import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
class Register extends Component{
    state={};
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            username: this.username,
            confirm_password: this.repeatPassword
        };
        console.log('Successfully registered');

        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Token 387682253613622d3ad4df59afcfccaf0918d9dd'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }
        postData('https://dffd7d246e31.ngrok.io/api/auth/register', data)
            .then(res => {
                console.log(res); // JSON data parsed by `data.json()` call
                // localStorage.setItem('token', res.first_name);
                this.setState({
                    registered: true
                });
            });
        //this is a get request
        // fetch('https://b9f3614fafd6.ngrok.io/api/users/')//https://api.github.com/users/hacktivist123/repos
        //     .then(response => response.json())
        //     .then(data => console.log(data));

    }
    render(){
        if(this.state.registered){
            return <Redirect to={'/'}/>

        }
        return(
            <div className="container">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form className="user" onSubmit={this.handleSubmit}>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user"
                                                       id="firstName"
                                                       placeholder="First Name" onChange= { e => this.firstName = e.target.value}/>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control form-control-user"
                                                       id="lastName"
                                                       placeholder="Last Name" onChange= { e => this.lastName = e.target.value}/>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control form-control-user"
                                                       id="lastName"
                                                       placeholder="UserName" onChange= { e => this.username = e.target.value}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user"
                                                   id="email"
                                                   placeholder="Email Address" onChange= { e => this.email = e.target.value}/>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" className="form-control form-control-user"
                                                       id="password" placeholder="Password" onChange= { e => this.password = e.target.value} />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="password" className="form-control form-control-user"
                                                       id="repeatPassword" placeholder="Repeat Password" onChange= { e => this.repeatPassword = e.target.value}/>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-user btn-block">
                                            Register Account
                                        </button>
                                        <hr/>
                                            <Link to={'/'}
                                               className="btn btn-google btn-user btn-block">
                                                <i className="fab fa-google fa-fw"></i> Register with Google
                                            </Link>
                                            <Link to={'/'}
                                               className="btn btn-facebook btn-user btn-block">
                                                <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                            </Link>
                                    </form>
                                    <hr/>
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <Link className="small" to={'/'}>Already have an account? Login!</Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default Register;