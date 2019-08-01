import React from "react";
import { useSelector } from 'react-redux'
import styles from './App.less';
import HeartIcon from '../../resources/icons/heart.svg';
import Counter from '../Counter/Counter';
import ReduxCounter from '../ReduxCounter/ReduxCounter';

const App = () => {
    const { count } = useSelector(state => state.counter);
    return (
        <div className={styles.app}>
            Hello World from React
            <img className={styles.icon} src={HeartIcon} />
            <br />
            <p>The counter from redux is now: {count}</p>
            <Counter />
            <ReduxCounter />
        </div>
    );
};

export default App;
