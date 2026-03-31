import { useState } from "react";
import styles from "@/styles/Counter.module.css";

export default function Counter({initialValue}) {
    const [count, setCount] = useState(initialValue);
    
    return (
        <div className={styles.Counter}>
            
        </div>
    );
}