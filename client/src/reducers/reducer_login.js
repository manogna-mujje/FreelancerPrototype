
export default function (state={}, action) {
    switch (action.type){
        case 'LOGIN_ACCOUNT':
           return {output: promOutput(action.payload, action.object, action.username)};
        default:
            return {output: ""};
    }
}

const promOutput = (prom, obj, usr) => {
    prom.then((res) => {
        if (res.status === 200){
            obj.props.history.push({
                    pathname: '/profile/' + usr,
                    state: {
                        username: usr
                    }
            })
        }
        else 
        document.getElementById("error-message").style.display = "block";
    });
}

// function promOutput( prom, obj, usr, callback ){
//     setTimeout( function(){
//       // simulate a time consuming function
//       prom.then((res) => {
//         if (res.status === 200){
//             obj.props.history.push({
//                     pathname: '/profile/' + usr,
//                     state: {
//                         username: usr
//                     }
//             })
//         }
//         else 
//         document.getElementById("error-message").style.display = "block";
//     });
//       // if callback exist execute it
//         if(callback) {
//             return callback()
//         }
//     }, 3000 );
//   }
   
//   function objectStatus(){
//     return obj.status.isLoggedin;
//   }
   
