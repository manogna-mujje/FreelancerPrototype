import React, {Component} from 'react';
import * as API from '../APIs/api';
import {loginAccount} from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            isLoggedin: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillMount(){
        
    // }

    handleSubmit(event){
        this.props.loginAccount(this.state.username, this.state.password, this);
        event.preventDefault();
    }

    handleChange(event) {
        switch (event.target.id ){
            case 'id-username':
                this.setState({
                    username : event.target.value
                });
                break; 
            case 'id-password':
                this.setState({
                    password : event.target.value
                });
                break;   
        }
    }

    render() {
        return (
            <div className="loginForm">
            <form onSubmit={this.handleSubmit}>
                <p id="error-message"> The email and password you entered did not match our records. Please double-check and try again. </p>
                <input className="inputField" type="text" id= "id-username"  name="username" placeholder="Username"
                onChange={this.handleChange}
                /> <br />
                <input className="inputField" type="password" id= "id-password"  name="password" placeholder="Password"
                onChange={this.handleChange}
                /> <br />
                <input className="inputField" id="submit" type="submit" value="Login" />
            </form>
            <br /> 
            <br />
            <br /> 
            <br />
            <div className = "form-footer"> Don't have an account? <span> <Link to= '/signup'>Sign Up. </Link> </span> </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {  
        loginOutput: state.loginOutput
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
            loginAccount: loginAccount
        }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Login); 

