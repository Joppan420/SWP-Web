import React, { useState } from 'react';
import styles from './Button.module.css'

export default function Button(props) {
        const [isOn, setIsOn] = useState()

    return (
        <div 
            className={isOn?styles.isOn:styles.isOff} 
            onClick={()=>{

                setIsOn(!isOn);
                if(!isOn){
                    alert("Button is on")
                }
                else{
                    alert("Button is off")
                }
            }}
        >
        
            {props.text}
        </div>
    )
}