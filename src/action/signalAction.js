export const Add1 = () => ({
  type: 'ADD1',
  
})
export const Remove1 = () => ({
  type: 'REMOVE1',
 
})
export const Add2 = () => ({
  type: 'ADD2',
  
})
export const Remove2 = () => ({
  type: 'REMOVE2',
 
})
export const GetSign = (index,value) => ({
  type: 'GETSIGN',
  payload : {
    index :index,
    value : value
  }
})

