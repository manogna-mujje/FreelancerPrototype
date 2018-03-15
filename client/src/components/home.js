import React, {Component} from 'react';
import * as API from '../APIs/api';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Login } from './login';

class Home extends Component {
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        API.checkSession().then((res)=> {
            console.log(res);
            this.state = {
                isLoggedin: true,
                user: res.value.user
            }
        })
    }

    render(){
        if (this.state === null){
            return null;
        }
        else if(this.state.isLoggedin){
            return (
                <div>
                    <h1> Welcome back, </h1>
                    <Link to="/post-a-project">Post a Project</Link>
                </div>
            );
        } else {
            return <Login />
        }
       
    }
}

export default Home;