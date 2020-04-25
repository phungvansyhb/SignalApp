const initialState = {
  numSign1 : 1,
  numSign2 : 1,
  Sign1 :[],
  Sign2 :[],
  
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADD1":
    state.numSign1+=1;
    return { ...state };
    
  case "REMOVE1":
    state.numSign1-=1
    return { ...state }
  case "ADD2":
    state.numSign2+=1;
    return { ...state };
    
  case "REMOVE2":
    state.numSign2-=1
    return { ...state }
  case "GETSIGN":
    console.log(payload)
    let a = 'q21eqweqw';
    
    if( payload.index.startsWith("1") ){
       if(state.Sign1.length===0) state.Sign1.push(payload)
       else {
         for (const elm of state.Sign1) {
           if (elm.index === payload.index) {
             console.log("da ton tai pha ntu ")
             elm.value = payload.value
           }
           else{
             state.Sign1.push(payload)
           }
         }
       }
    }
    if(payload.index.startsWith("2")){
      console.log("thuoc 2 ")
    }
    return {...state}
  default:
    return state
  }
}
