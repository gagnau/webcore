import React, { useState } from "react";
import styles from './Counter.less';

const Counter = () => {
    const [currentCount, setCurrentCount] = useState(0);
    return (
        <div className={styles.counter}>
            React state Counter. Current count: {currentCount}
            <br/>
            <button onClick={() => setCurrentCount(currentCount-1)}>-</button>
            <button onClick={() => setCurrentCount(currentCount+1)}>+</button>
        </div>
    );
};

export default Counter;
