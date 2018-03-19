import React, {Component} from 'react';
import * as API from '../APIs/api';
import { checkSession } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Profile extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event){
        API.updateProfile(this.refs.fname.value, this.refs.lname.value, this.refs.country.value, this.refs.location.value, this.refs.phone.value, 'uploaded_image' );
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <h1>Hello, {this.props.match.params.user}</h1>
                <button className="menu-button" id="logout" onClick={this.handleClick} > Logout </button>
                <form className="profile-form" onSubmit={this.handleSubmit}>
                    <div id="profile-picture"> 
                        <input type="file" name="uploaded_image" accept="" /> 
                    </div>
                    <div id="fields"> 
                        <label> First Name </label> <br/>
                        <input type="text" ref="fname" placeholder="First Name" /><br/>
                        <label> Last Name </label><br/>
                        <input type="text" ref="lname" placeholder="Last Name" /><br/>
                        <label> Location </label><br/>
                        <input type="text" ref="location" placeholder="Location" /><br/>
                        <label> Country </label><br/>
                        <input type="text" ref="country" placeholder="Country" /><br/>
                        <label> Phone Number </label><br/>
                        <input type="text" ref="phone" placeholder="Phone Number" />
                    </div>
                    <input type="submit" />
                </form>
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

