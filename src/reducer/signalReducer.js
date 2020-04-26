const initialState = {
    numSign1: 1,
    numSign2: 1,
    Sign1: [],
    Sign2: [],
    result : [],
    isError:false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD1':
            state.numSign1 += 1
            return { ...state }

        case 'REMOVE1':
            state.numSign1 -= 1;
            state.Sign1.pop()
            return { ...state }
        case 'ADD2':
            state.numSign2 += 1
            return { ...state }

        case 'REMOVE2':
            state.numSign2 -= 1;
            state.Sign2.pop()
            return { ...state }
        case 'GETSIGN':
            if (payload.index.startsWith('1')) {
                if (state.Sign1.length === 0) state.Sign1.push(payload)
                else {
                    let count = 0
                    for (const iterator of state.Sign1) {
                        if (iterator.index === payload.index) {
                            iterator.value = payload.value
                            count += 1
                        }
                    }
                    if (count === 0) {
                        state.Sign1.push(payload)
                    }
                }
            }
            if (payload.index.startsWith('2')) {
              if (state.Sign2.length === 0) state.Sign2.push(payload)
              else {
                  let count = 0
                  for (const iterator of state.Sign2) {
                      if (iterator.index === payload.index) {
                          iterator.value = payload.value
                          count += 1
                      }
                  }
                  if (count === 0) {
                      state.Sign2.push(payload)
                  }
              }
            }
            return { ...state }

          case "CACULRESULT":
            state.isError = false;
            let arr1 = [];
            state.Sign1.map(   (elm) => {
              return arr1.push( parseFloat(elm.value))
            })
           
            let arr2 = [];
            state.Sign2.map(   (elm) => {
              return arr2.push( parseFloat(elm.value))
            })
            let matrix2 = new Array(arr1.length).fill(0);
            // console.log(matrix2.concat([1,2,3]).concat(Array(arr1.length-1).fill(0)))

            for( let i =0 ; i < matrix2.length ; i++){
                matrix2[i] = Array(i).fill(0)
                          .concat(arr2)
                          .concat( Array(arr1.length-i-1).fill(0) )
              }
           
            let result = Array(arr1.length+arr2.length-1).fill(0);
            for (let i = 0 ; i<arr1.length+arr2.length-1 ; i++){
              for (let j = 0 ; j<matrix2.length ; j++){
                result[i]+=arr1[j]*matrix2[j][i]
              }
            }
            state.result = result
            for (const iterator of result) {
              if(isNaN(iterator)) state.isError=true
            }
            return {...state}


            
        default:
            return state
    }
}
