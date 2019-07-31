import React from "react";
import styles from './App.less';
import HeartIcon from '../resources/icons/heart.svg';
import Counter from '../Counter/Counter';

const App = () => {
    return (
        <div className={styles.app}>
            Hello World from React
            <img className={styles.icon} src={HeartIcon} />
            <br />
            <Counter />
        </div>
    );
};

export default App;
