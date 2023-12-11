import logo from './logo.svg';
import './App.css';
import person from './exports/person';
import { useState,useEffect, useRef } from 'react';
import store from './redux/store';
import { Plus } from './redux/actions';
import MemoComp from './pages/MemoComp';
// import { amount,duration } from './exports/constants';

const myArray = ['apple', 'banana', 'orange'];

const mapStatetoProps = state => {

  return {

message: state.message

  };

};

 

const mapDispatchToProps = dispatch => {

  return {

Buttonchange: () => dispatch({ type: "Message_change" })

  };

};

function save(){

}
function ChangeAmount(props) {
  const [amount, setAmount] = useState(5);
  const ref = useRef();
  // useEffect(() => {
  //   alert('props changed');
  //   console.log(ref);
  // }, [props.color,amount]); 

  const save = () => {
    store.dispatch(Plus(5))
    setAmount(amount+5)
  }
  return (
    <div className="App">
    default {person.name} color {props.color}

    {myArray.map((item) => <p>{item}</p>)}
    <br/>
    <button className='btn btn-success' onClick={() => save()}>Plus</button> <br /> 

    <MemoComp color={props.color} />
    <button className='btn btn-danger' onClick={() => setAmount(amount-5)}>Minus</button>
redux value {store.getState()}
    <p>Amount {amount}</p>
    </div>
  );
}

export default ChangeAmount ;
