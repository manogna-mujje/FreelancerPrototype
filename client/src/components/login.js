import React, {Component} from 'react';
import * as API from '../APIs/api';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "",
            formType: 'login'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleSubmit(event) {
        var username = document.getElementById('id-username').value;
        var password = document.getElementById('id-password').value;
        API.validateLogin(username, password, this);
        
        event.preventDefault();
        }
        
    render() {
        return (
            <div className="loginForm">
                <form onSubmit={this.handleSubmit}>
                    <input className="inputField" type="text" id= "id-username"  name="username" placeholder="Username"/> <br />
                    <input className="inputField" type="password" id= "id-password"  name="password" placeholder="Password"/> <br />
                    <input className="inputField" id="submit" type="submit" value="Login" /> 
                </form>
                <div id = "message" > </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        message: state.message
    }
}
export default Login;