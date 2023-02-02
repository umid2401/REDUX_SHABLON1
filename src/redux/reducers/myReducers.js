const initialState={
  products:[],
};
export const myReducers=(state=initialState,action)=>{
    switch(action.type){
      case "getProduct":{
        return {
           ...state, products:action.payload
        }
      }
      default:{
        return state;
      }
    }
}