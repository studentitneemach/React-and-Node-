import {createStore} from 'redux';
const Data={
    authenticated:false,
    user:[]
}
const Reducer=(state=Data,action)=>{

    switch(action.type){
      case "ADD": 
        return{
            ...state,
            user:action.payload
        }
        case "REMOVE":  
        return{
            ...state,
            user:[],
        }
        
        default : return state
    }
}

export const Store = createStore(Reducer)