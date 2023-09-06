import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
{/*const Buy_Cake='Buy_Cake'
const Buy_IceCream='Buy_IceCream'
function buycake(){
  return{
    type:'Buy_cake',
    info:'first redux action'
  }
}
function buyicecream(){
  return{
    type:'Buy_IceCream'
  }
}
const cakeInitialState= {
  numOfCakes:10
}
const iceCreamInitialState= {
  numOfIceCream:20
}
const cakeReducer=(state=cakeInitialState,action)=>{
  switch(action.type){
    case Buy_Cake:return{...state,
      numOfCakes:state.numOfCakes-1
    }
    default:return state
  }
}
const iceCreamReducer=(state=iceCreamInitialState,action)=>{
  switch(action.type){
    case Buy_IceCream:return{...state,
      numOfIceCream:state.numOfIceCream-1
    }
    default:return state
  }
}
const rootReducer=combinedReducers({
  cake:cakeReducer,
  iceCream:iceCreamReducer
})
const store=createStore(reducer)
console.log('intial state',store.getState())
store.unsubscribe=store.subscribe(()=>console.log('updtaed state',store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(Buy_IceCream())
store.unsubscribe()*/}


