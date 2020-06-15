const initialState = {
    jwt:""
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type ===  "ADD_JWT") {
        return Object.assign({}, state, {
            jwt: action.jwt
           
          });
          
      }
      return state;
  };
  
  export default rootReducer;