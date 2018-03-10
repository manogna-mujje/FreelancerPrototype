export default function (state={}, action) {
    switch (action.type){
        case 'CLICK_PASSWORD':
            if(action.data.length == 0 )
                return {output: "Please enter a password."};
            else if(action.data.length < 6 )
                return {output: "Password must be 6 characters minimum"};
            else
                document.getElementById("password-message").style.display= "none";
                document.getElementById("id-password").style.border= "2px solid green";
                return {output: ""};

        default:
            return {output: ""};
    }
}