import { useState } from "react";
import styles from "@/styles/Counter.module.css";

export default function Counter({initialValue}) {
    const [count, setCount] = useState(initialValue);
    
    const addCount = function() {
        setCount(count + 1);
    }
    
    const subtractCount = function() {
        setCount(count - 1);
    }
    
    return (
        <>
        <div className={styles.Counter}>
            <span className={styles.Count}>{count}</span>
            <div className={styles.ButtonList}>
                <button className={styles.CounterButton} onClick={subtractCount}>&minus;</button>
                <button className={styles.CounterButton} onClick={addCount}>+</button>
            </div>
        </div>
        <div className={styles.Status}>
            <h1>{count % 2 === 0 ? "The count is even." : "The count is odd."}</h1>
            <h2>{`The count is also ${count < 0 ? "negative." : (count === 0) ? "zero." : "positive."}`}</h2>
        </div>
        </>
    );
}