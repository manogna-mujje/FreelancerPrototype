const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3000'

var url;

export const validateSignup = function (email, username, password, object){
    url = `${api}/signup`;
    fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
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
                        message: 'Signup successful'
                    })
                    document.getElementById('message').innerHTML = object.state.message;
                } else if (res.status === 400){
                    object.setState({
                        message: 'Username already exists.'
                    })
                    document.getElementById('message').innerHTML = object.state.message;
                }
        //         res.json()
        //       .then((data) => {
        //       console.log(data);
        //       object.setState({
        //           message: data,
        //       });
        //       return data;
        //   }, (err) => {
        //       console.log(err);
        //   } )
        console.log(res);
      }); 
      return true;   
  };

  export const validateLogin = function (username, password, object){
    url = `${api}/login`;
    fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  username: username,
                  password: password
              })
            })
            .then(res => {
                console.log(res);
                if(res.status === 200){
                    object.setState({
                        message: 'Login success'
                    })
                    document.getElementById('message').innerHTML = object.state.message;
                } else if (res.status === 400){
                    object.setState({
                        message: 'Incorrect Password'
                    })
                    document.getElementById('message').innerHTML = object.state.message;
                }else if (res.status === 404){
                    object.setState({
                        message: 'Username does not exist.'
                    })
                    document.getElementById('message').innerHTML = object.state.message;
                }
        //         res.json()
        //       .then((data) => {
        //       console.log(data);
        //       object.setState({
        //           message: data,
        //       });
        //       return data;
        //   }, (err) => {
        //       console.log(err);
        //   } )
      }); 
      return true;   
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
