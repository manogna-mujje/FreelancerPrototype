import React, {Component} from 'react';
import * as API from '../APIs/api';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Login } from './login';
import { store } from '../index'
import {checkSession} from '../actions/index';

class Home extends Component {
    constructor(props){
        super(props);
        console.log(this.props.location);
    }

    // componentDidMount(){
    //     // API.checkSession().then((res)=> {
    //     //     console.log(res);
    //     //     this.state = {
    //     //         isLoggedin: true,
    //     //         user: res.value.user
    //     //     }
    //     // })
    //     console.log(API.checkSession());
    // }

    
    render(){
        // store.dispatch(checkSession());
        return (
            <div>
                <h1> Welcome back, </h1>
                <Link className="menu-button" to="/post-project">  Post a Project  </Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {  
        isLoggedin: state.session.isLoggedin,
        user: state.session.user
    };
}
export default connect(mapStateToProps, null) (Home); 