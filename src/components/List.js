import { useState } from "react";
import React from "react";
import styles from "@/styles/List.module.css";

export default function List({initialValue}) {
    const [ items, setItems ] = useState(initialValue);
    const [ selected, setSelected ] = useState(null);
    
    const onItemClick = function(e) {
        setSelected(items.find((element) => element.id === parseInt(e.target.getAttribute("item"))));
    }
    
    const conditionalRenderList = function() {
        if (items.length > 0) {
            return (items.map((obj) => (
            <button key={obj.id} item={obj.id} className={styles.listItem} onClick={onItemClick}>
                <h2 item={obj.id}>{obj.title}</h2>
                    <p item={obj.id}>{obj.content}</p>
            </button>
            )));
        } else {
            return (
            <>
            <h3>This list is empty.</h3>
            <h4>Add a list item using the form below.</h4>
            </>
            );
        }
    }
    
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