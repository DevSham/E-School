import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Header from "./layout/Header";


class Home extends Component{
    render(){
        if(this.props.user){
            return (
                <div>
                    <Header/>


                    <h1>Hi this is your Email {this.props.user}</h1>
                    <p>Am home</p>
                </div>

            )
        }else{
            return (
                <p>You are not logged in</p>
            )
        }
    }

}

export default Home;