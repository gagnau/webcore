import React from "react";
import ReactDOM from "react-dom";
import styles from './App.less';
import HeartIcon from '../resources/icons/heart.svg';

const App = () => {
    return (
        <div className={styles.app}>
            Hello World from React
            <img className={styles.icon} src={HeartIcon} />
        </div>
    );
};

export default App;
