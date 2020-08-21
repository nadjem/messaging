import store from '../store/reducers'
const ADR_REST_SRV = 'http://localhost:5629/api';


export const userLogin = (body,callback) => {
    fetch(`${ADR_REST_SRV}/user/login`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(flux => flux.json()).then(obj => {
        console.log(obj)
        if (obj.length === 0) {
            return obj;
        }
        else { 
            return callback(obj);
            //store.dispatch({type:'SET_USER',value:obj.data}) 
        }
        //return obj[0];
    })
}

export const getUsers = (callback) => {
    fetch(`${ADR_REST_SRV}/user/`).then(flux => flux.json()).then(obj => {
        //console.log(obj.data)
        if (obj.length === 0) {
            return obj;
        }
        else { 
            return callback(obj);
            //store.dispatch({type:'SET_USERS',values:obj.data}) 
        }
        //return obj;
    })
}



export const getMessages = (callback) => {
    const _store=store;
      fetch(`${ADR_REST_SRV}/message/`).then(flux => flux.json()).then(obj => {
        //console.log(obj.data)
        if (obj.length === 0) {
            return obj;
        }
        else { 
            return callback(obj);
            
            //store.dispatch({type:'SET_USERS',values:obj.data}) 
        }
        //return obj;
    })
}

export const newMessage = (body,callback) =>{
    fetch(`${ADR_REST_SRV}/message`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(flux => flux.json()).then(obj => {
        console.log(obj)
        if (obj.length === 0) {
            return obj;
        }
        else { 
            return callback(obj);
            //store.dispatch({type:'SET_USER',value:obj.data}) 
        }
        //return obj[0];
    })
}