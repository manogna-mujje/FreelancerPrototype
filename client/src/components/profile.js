import React, {Component} from 'react';
import * as API from '../APIs/api';
import {checkSession} from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Profile extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
       console.log(this.props.checkSession());
        this.props.checkSession().then((res)=> {
            console.log(res);
            if(!this.props.isLoggedin || (this.props.match.params.user !== this.props.user)){
                this.props.history.push('/login');
            }
        });
        
    }
    
    handleClick(){
        API.logout().then((res) => {
           if(res.status === 200){
            this.props.history.push('/login');
           }
        })
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <h1>Hello, {this.props.match.params.user}</h1>
                <button className="menu-button" id="logout" onClick={this.handleClick} > Logout </button>
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
            checkSession: checkSession
        }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile); 

