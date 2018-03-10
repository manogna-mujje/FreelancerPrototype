import { withRouter } from 'react-router-dom';
const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3000';

var url;

export const validateSignup = function (email, username, password, object){
    url = `${api}/signup`;
    fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({
                  email: email,
                  username: username,
                  password: password
              })
            })
            .then(res => {
                console.log(res);
                if(res.status === 200){
                    object.setState({
                        signedUp: true,
                        message: 'Signup successful'
                    })
                } else if (res.status === 400){
                    object.setState({
                        signedUp: false,
                        message: 'Username already exists.'
                    })
                }
      }); 
      return true;   
  };

  export const validateLogin = function (username, password){
      console.log(`API-username: ${username}`);
      console.log(`API-password: ${password}`);
        url = `${api}/login`;
        return fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }, 
              credentials: "omit",
              body: JSON.stringify({
                  username: username,
                  password: password
              })
            })
  };

  export const validateUsername = function (username){
    url = `${api}/validateUsername`;
    fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  username: username
              })
            })
            .then(res => {
                console.log(res);
                if(res.status === 200){
                    document.getElementById("username-message").style.display= "none";
                    document.getElementById("id-username").style.border= "2px solid green";
                    document.getElementById('username-message').innerHTML = '';
                } else if (res.status === 400){
                    document.getElementById("username-message").style.display= "block";
                    document.getElementById('username-message').innerHTML = 'This username already exists, please choose another';
                }
            }); 
};
