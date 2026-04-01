import { useState } from "react"; // Import useState function from React to manage state
import styles from "@/styles/Counter.module.css"; // Import relevant CSS module for Counter styling

export default function Counter({initialValue}) {
    
    /* Instead of hooking useState() in @/pages/CounterPage/index.js
    then passing that on with some functions as a prop for display,
    we will instead give an initial value as a prop so the component
    itself can set and manage its own state. */
    const [count, setCount] = useState(initialValue);
    
    // Event handler functions to use in the JSX for this component
    const addCount = function() { setCount(count + 1); }
    const subtractCount = function() { setCount(count - 1); }
    
    /*
        
        Counter component displaying a number count, with two buttons to decrease
        and increase said count. The count is managed and set using React useState()
        hook. Below that counter are 2 headers of text, one describing if the count
        is odd or even, and the other describing if the count is positive, negative,
        or zero, using React's ternary JSX operators.
        
        You'll notice near the bottom some weird looking code in curly braces.
        This is React's ternary operator that I am using for conditional rendering.
        It's like if-else statements in JavaScript, just packed into a more concise,
        but slightly more complicated syntax. It's a shortcut for if-else.
        
        Based on the current count and the conditions of whether or not it is even,
        and whether it is positive, negative, or zero, the text in the Status <div>
        updates to conditionally render.
        
        For the positive/negative/zero condition I am nesting a ternary operator
        inside another ternary operator. The first operator (< 0), if the condition
        evaluates false, will move to another operator (=== 0). If that evaluates
        true, it will report zero. Otherwise it will report positive.
        
        The <h1> and <h2> in Status <div> also use JavaScript backticks (``) for
        formatted strings. Any text other than whatever is wrapped into the ${}
        is considered plain strings, with no calculations behind it. I had to wrap
        these backticks inside another pair of curly braces cause that's how React works.
        
    */
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
            <h1>{`The count is ${count % 2 === 0 ? "even." : "odd."}`}</h1>
            <h2>{`The count is also ${count < 0 ? "negative." : (count === 0) ? "zero." : "positive."}`}</h2>
        </div>
        </>
    );
}