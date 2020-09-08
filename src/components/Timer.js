import React, {useState, useEffect} from 'react';
import Button from './Button'

export default function Timer(){
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [start, setStart] = useState(false);

    const handleOnStart = () =>{
        setStart(!start);
    }

    const handleOnReset = () =>{
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    useEffect(() => {
       if (start) {
           const timerId = setTimeout(() => {
               setSeconds(prevSeconds => prevSeconds + 1);
               if (seconds === 59){
                   setSeconds(prevSeconds => 0)
                   setMinutes(prevMinutes => prevMinutes + 1)
               } else if (minutes === 59) {
                    setMinutes(prevMinutes => 0)
                    setHours(prevHours => prevHours + 1)
               }
           }, 1000);
            return () => {
                clearTimeout(timerId);
            }
       }
    });


    return (
        <>
            <h1>{hours}:{minutes}:{seconds}</h1>
            <Button onClick={handleOnStart} value={ start ? "Stop" : "Start"}/>
            <Button onClick={handleOnReset} value="Reset"/>
        </>
    )
}