import React, {Component} from 'react';
import * as API from '../APIs/api';


class Profile extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     loggedIn: true
        // }
        this.handleClick = this.handleClick.bind(this);
    }

    // componentDidMount(){
    //     if(this.state.loggedIn) {
    //         history.pushState(null, null, location.href);
    //         window.onpopstate = function(event) {
    //           history.go(1);
    //         };
    //       }
    // }


    handleClick(){
        // this.setState ({
        //     loggedIn: false
        // });
        API.logout().then(() => {
            this.props.history.push('/login');
        })
    }

    render(){
        return(
            <div>
                <h1>Hello, {this.props.location.state.username }</h1>
                <button className="menu-button" id="logout" onClick={this.handleClick} > Logout </button>
            </div>
        );
    }
}

export default Profile;