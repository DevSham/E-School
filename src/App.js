import './App.css';
import Login from "./Login";
import './components/homepage.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Register from "./registration/Register";
import Home from "./Home";
import React, {Component} from "react";
import Homepage from './components/homepage';
import Header from "./layout/Header";
import Notes from './components/teacher_Access/pages/notes';
import Grade from './components/teacher_Access/pages/grade';
import PastPapers from './components/teacher_Access/pages/pastpapers';
import teacher_dash from './components/teacher_Access/teacher_dash';
import studentdash from './components/student_Access/studentdash';
class App extends Component{
    state = {};
    componentDidMount = () => {
        const myHeaders = new Headers();

        const config = new Request('http://08450d381592.ngrok.io/api/auth/user', {
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('token')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            method: 'GET',
            mode: 'cors',
        });
        //this is a get request
        fetch(config)//https://api.github.com/users/hacktivist123/repos
            .then(response => response.json())
            .then(res => {
                this.setState({
                    user: res.email
                })
            });
    }

    render() {
        return (
            <BrowserRouter>

                <div className="App">
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <Switch>
                                <Route exact path="/" component={Login}/>
                                <Route exact path="/logout" component={Login}/>
                                <Route exact path="/register" component={Register}/>
                                <Route exact path="/home" component={() => <Homepage user={this.state.user}/>}/>
                                < Route path='/teacher_Access/pages/grade' component={Grade}/>
                                < Route path='/teacher_Access/pages/notes' component={Notes}/>
                                <Route path='/teacher_Access/pages/pastpapers' component={PastPapers}/>
                                <Route path='/student_Access/studentdash' component={studentdash}/>
                                <Route path='/teacher_Access/teacher_dash' component={teacher_dash}/>
                            </Switch>
                        </div>
                    </div>

                </div>
            </BrowserRouter>




        );
    }


}

export default App;
