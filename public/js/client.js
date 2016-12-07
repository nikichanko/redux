import { createStore } from 'redux';

const reducer = function(state, action){  // Create a reducer; logic of the reducer when state is changed
    if(action.type === "INC" )
        return state+action.payload;
    else
        return state;
}

const store = createStore(reducer, 0); // Create store which use the reducer


store.subscribe( () => {
    console.log("store change", store.getState()) // display each state of store when update
});

store.dispatch({type: "INC",payload: 1});  // here store is changed updated; you can chanage here all properties exepts type;
store.dispatch({type: "INC",payload: 2});
store.dispatch({type: "INC",payload: 3});


