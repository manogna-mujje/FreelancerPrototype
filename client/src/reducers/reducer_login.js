
export default function (state={}, action) {
    switch (action.type){
        case 'LOGIN_ACCOUNT':
           return {output: callback(action.payload, action.object)}
        default:
            return {output: ""};
    }
}

const callback = (prom, obj) => {
    prom.then((res) => {
        if (res.status === 200)
        obj.props.history.push('/profile');
        else 
        document.getElementById("error-message").style.display = "block";
    })
}