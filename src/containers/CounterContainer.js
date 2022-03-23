import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import { increaseAsync, decreaseAsync } from '../modules/counter';

const CounterContainer = () => {

    const number = useSelector(state => state.counter);
    console.log(number);  //undefined로 나옴
    const dispatch = useDispatch(); 

    const onIncrease = () => {
        dispatch(increaseAsync());
    };

    const onDecrease = () => {
        dispatch(decreaseAsync());
    };

    return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}></Counter>

};

export default CounterContainer;