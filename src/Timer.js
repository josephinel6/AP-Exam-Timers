import { useState, useEffect, useContext, useRef } from 'react';
import TimerContext from './TimerContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRefresh } from '@fortawesome/free-solid-svg-icons'

export default function Timer() {
    const timerContext = useContext(TimerContext);

    const [totalSeconds, setTotalSeconds] = useState(0);
    const [isPaused, setIsPaused] = useState(true);

    const totalSecondsRef = useRef(totalSeconds);
    const isPausedRef = useRef(isPaused);

    function tick() {
        totalSecondsRef.current--;
        setTotalSeconds(totalSecondsRef.current);
    }

    function togglePause() {
        if (isPausedRef.current) {
            setIsPaused(false);
            isPausedRef.current = false;
        }
        else {
            setIsPaused(true);
            isPausedRef.current = true;
        }
    }

    function reset() {
        totalSecondsRef.current = timerContext.minutes * 60;
        setTotalSeconds(totalSecondsRef.current);
        isPausedRef.current = true;
        setIsPaused(isPausedRef.current);
    }

    useEffect(() => {

        totalSecondsRef.current = timerContext.minutes * 60;
        setTotalSeconds(totalSecondsRef.current);

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (totalSecondsRef.current == 0) {
                return;
            }

            tick();


            if (seconds == 0) {
                console.log(totalSecondsRef.current)
                isPausedRef.current = true;
                setIsPaused(true);
                alert("Time up!");
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timerContext])

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor(totalSeconds % 3600 / 60);
    let seconds = totalSeconds % 60;

    if (hours < 10)
        hours = "0" + hours;

    if (minutes < 10)
        minutes = "0" + minutes;

    if (seconds < 10)
        seconds = "0" + seconds;

    return (
        <div id="timer-container">
            <div id="timer"> {hours + ':' + minutes + ':' + seconds}</div>
            <div id="toggles">
                <FontAwesomeIcon onClick={() => togglePause()} className="icon" icon={isPaused ? faPlay : faPause} />
                <FontAwesomeIcon onClick={() => reset()} className="icon" icon={faRefresh} />
            </div>
        </div>
    );
}