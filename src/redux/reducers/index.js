const reducer = (state = 1, action) => { //es6 arrow function
    console.log('reducer',state)
    switch (action.type) {
       case 'Plus':
          return state+5
       default:
          return state;
    }
 }
 export default reducer;