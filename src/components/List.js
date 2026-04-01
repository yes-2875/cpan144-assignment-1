import { useState } from "react"; // Import useState hook from React to manage state
import styles from "@/styles/List.module.css"; // Import List CSS module for styling

export default function List({initialValue}) {
    
    /* Instead of hooking useState() in @/pages/ListItems/index.js
    then passing that on with some functions as a prop for display,
    we will instead give an initial value as a prop so the component
    itself can set and manage its own state. */
    const [ items, setItems ] = useState(initialValue);
    
    // State for the Details section of the component changing upon clicking a list item.
    const [ selected, setSelected ] = useState(null);
    
    /* On clicking a list item, selects the list item (an Object{}) in items Array[]
    matching the id of the HTML element for the list item */
    const onItemClick = function(e) {
        setSelected(items.find((element) => element.id === parseInt(e.target.getAttribute("item"))));
    }
    
    /* Returns JSX conditionally for the item list itself. This is more
    readable and appropriate in this scenario compared to the ternary operator.
    It can be called as a function within the actual return statement of the component.*/
    
    const conditionalRenderList = function() {
        if (items.length > 0) {
            /*
                If items array is not empty, map through it, returning the relevant HTML elements
                for each and every list item with the relevant identifier, title, and content.
            */
            return (items.map((obj) => (
            <button key={obj.id} item={obj.id} className={styles.listItem} onClick={onItemClick}>
                <h2 item={obj.id}>{obj.title}</h2>
                    <p item={obj.id}>{obj.content}</p>
            </button>
            )));
            
            // Otherwise, just say that the list is empty and return that alone.
        } else {
            return ( <h3>This list is empty.</h3> );
        }
    }
    
    /* Returns JSX conditionally for the details section.
    Like the previous conditional render function, it can be called
    within the return statement of the List component itself. */
    const conditionalRenderDetails = function() {
        if (selected) {
            return (
                <>
                <h2>{selected.title}</h2>
                <h3>{selected.content}</h3>
                <p>{selected.details}</p>
                </>
            );
        } else {
            return (
                <>
                <h2>No items selected.</h2>
                <h3>Click an item to select it and view details.</h3>
                </>
            );
        }
    }
    
    // Enclose the contents of both sections of the List component
    // as a function call for conditional rendering before returning.
    return (
        
        <>
        <div className={styles.list}>
            {conditionalRenderList()}
            
        </div>
        <div className={styles.details}>
            {conditionalRenderDetails()}
        </div>
        </>
    );
}