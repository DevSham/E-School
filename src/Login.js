import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import img1 from "./img1.jpg";
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
        postData('https://dffd7d246e31.ngrok.io/api/auth/login', data)
            .then(res => {
                console.log(res); // JSON data parsed by `data.json()` call
                localStorage.setItem('token', res.token);
                this.setState({
                    loggedIn: res.token
                });
            });

    }
    render(){
        if(this.state.loggedIn){
            return <Redirect to={'/home'}/>
        }
        return(

            <div className="container ">

                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user" onSubmit={this.handleLoginSubmit}>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user"
                                                           id="exampleInputEmail" aria-describedby="emailHelp"
                                                           placeholder="Enter username ..." onChange= { e => this.username = e.target.value}/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                           id="exampleInputPassword" placeholder="Password" onChange= { e => this.password = e.target.value}/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck">Remember
                                                                Me</label>
                                                    </div>
                                                </div>
                                                <button
                                                   className="btn btn-primary btn-user btn-block">
                                                    Login
                                                </button>
                                                <hr/>

                                            </form>
                                            <hr/>
                                                <div className="text-center">
                                                    <a className="small" href="forgot-password.html">Forgot
                                                        Password?</a>
                                                </div>
                                                <div className="text-center">
                                                    <Link className="small" to={'/register'}>Create an Account!</Link>
                                                </div>
                                        </div>
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

export default Login;