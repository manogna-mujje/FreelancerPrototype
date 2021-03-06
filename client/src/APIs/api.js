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
              credentials: 'include',
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
              credentials: 'include',
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


export const profile = function (username){
    url = `${api}/profile`;
    return fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({
                  username: username
              })
            })
};

export const logout = function (){
    url = `${api}/logout`;
    return fetch(url, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              credentials: 'include'
            })
};

export const checkSession = function (){
    url = `${api}/checkSession`;
    return fetch(url, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              credentials: 'include'
            })
};

export const postProject = function (title, description, skills, owner, budget){
    url = `${api}/postProject`;
    return fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({
                title, 
                description, 
                skills, 
                owner,
                budget
              })
            }) 
  };


  export const postBid = function ( projectId, freelancerUsername, bidAmount, employerUsername){
    url = `${api}/postBid`;
    return fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({
                projectId, 
                freelancerUsername, 
                bidAmount, 
                employerUsername
              })
            }) 
  };

  export const showBids = function (project){
    url = `${api}/showBids`;
    console.log('Frontend API');
    return fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({
                project: project
              })
            }) 
  };

  export const showProjectDetails = function (project){
    url = `${api}/showProjectDetails`;
    return fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({
                project: project
              })
            }) 
  };

  export const showProjects = function (){
    url = `${api}/showProjects`;
    return fetch(url, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              credentials: 'include'
            }) 
  };

  export const updateProfile = function (firstname, lastname, country, location, phone, picture  ){
    url = `${api}/updateProfile`;
    return fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({
                  firstname: firstname,
                  lastname: lastname,
                  country: country,
                  location: location,
                  phone: phone,
                  picture: picture
              }),
              files: {
                picture: picture
              }
            })
};
