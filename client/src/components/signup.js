import React, {Component} from 'react';
import * as API from '../APIs/api';
import {clickEmail, clickUsername, clickPassword} from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            signedUp: false,
            message: "",
            formType: 'signup'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        var email = document.getElementById('id-email').value;
        var username = document.getElementById('id-username').value;
        var password = document.getElementById('id-password').value;

        API.validateSignup(email, username, password, this);
        event.preventDefault();
    }
    
    
    handleChange(event) {
        switch (event.target.id ){
            case 'id-email':
                document.getElementById("id-email").style.border= "2px solid red";
                this.props.clickEmail(event.target.value);
                break;
            case 'id-username':
                document.getElementById("id-username").style.border= "2px solid red";
                this.props.clickUsername(event.target.value);
                break; 
            case 'id-password':
                document.getElementById("id-password").style.border= "2px solid red";
                this.props.clickPassword(event.target.value);
                break;   
        }
    }
    
    handleOutput(text){
        var result, resultField;
        switch (text){
            case 'email':
                result = this.props.emailMsg.output;
                resultField = "email-message";
                break;
            case 'username':
                result = this.props.usernameMsg.output;
                resultField = "username-message";
                break;
            case 'password':
                result = this.props.passwordMsg.output;
                resultField = "password-message";
                break;
        }
        if (result != ""){
            document.getElementById(resultField).style.display= "block";
            return result;
        }
    }
    
    render() {
        return (
            <div className="signupForm" name="signupForm">
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="inputField" type="email" id= "id-email"  name="email"  placeholder="Email Address"
                        onChange={this.handleChange}
                    /> <br />
                    <p className="message" id="email-message"> {this.handleOutput('email')} </p>
                    <input className="inputField" type="text" id= "id-username"  name="username" placeholder="Username"
                        onChange={this.handleChange}
                    /> <br />
                     <p className="message" id="username-message"> {this.handleOutput('username')} </p>
                    <input className="inputField" type="password" id= "id-password"  name="password" placeholder="Password"
                        onChange={this.handleChange}
                    /> <br />
                    <p className="message" id="password-message"> {this.handleOutput('password')} </p>
                    <input type="radio" name="accountType" value="hire"> Hire </input>
                    <input type="radio" name="accountType" value="work"> Work </input> <br/>
                    <input className="inputField" id="submit" type="submit" value="Create Account" /> 
                </form>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {  
        emailMsg: state.emailMsg, 
        usernameMsg: state.usernameMsg, 
        passwordMsg: state.passwordMsg 
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
            clickEmail: clickEmail, 
            clickUsername: clickUsername, 
            clickPassword: clickPassword 
        }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup); 
