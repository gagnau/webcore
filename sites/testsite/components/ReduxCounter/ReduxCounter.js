import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../reducers/counter';
import styles from './ReduxCounter.less';

const ReduxCounter = () => {
    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();
      return (
        <div className={styles.reduxCounter}>
            Redux Counter. Current count: {count}
            <br/>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
};

export default ReduxCounter;
