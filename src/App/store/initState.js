//import UsersChat from "../component/components/UsersChat/UsersChat";

export const initState = {
    userReducer:
    {
      user:{
        email: "",
        id: -1,
        isLogged: false,
        name: "",
        nickname: "",
        password: ""  
      },
      users:[]
    },
    messageReducer:{
      messages:[]
    }
}