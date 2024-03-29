import { useEffect, useState ,useRef } from "react";
import completionSound from '../assets/bell.wav'
import achievementSound from '../assets/ach.wav'
function RestTimer({ isHidden, restTime, closeRestTimer }) {
    if (isHidden) {
        return null;
    }
    let interval;
    const [TimeLeft, setTimeLeft] = useState(restTime);
    const audioRef = useRef();
    const handleAudio = () => {
    }
    useEffect(() => {

        startTimer();
        return () => clearInterval(interval);
    });
    const startTimer = () => {
        interval = setInterval(() => {
            if (TimeLeft > 0) {
                setTimeLeft(TimeLeft => TimeLeft - 1);
            } else {
                // timer end
                //play audio
                audioRef.current.play();
                clearInterval(interval);
                closeRestTimer();
            }
        }, 1000);
    }

    return (
        <>
            
            <div className="RestTimer mx-[50vh] rounded-xl z-50 flex-col w-[110vh] bg-gray-200 px-4 h-[80vh]  flex justify-center items-center fixed m-12 shadow-2xl">
                <b><h1 className="text-3xl mb-6">Rest Timer</h1></b>
                <div className="Timer flex mb-10 mt-3 justify-center items-center w-32 h-32 rounded-[20vh] border-[10px] border-blue-500 bg-gray-100 ">
                    <h1 className="font-bold text-2xl ">{TimeLeft}</h1>
                </div>
                <audio ref={audioRef}  autoPlay={false}  src={completionSound}></audio>
                <div className="btnRow ">
                    <button onClick={() => {
                        if(TimeLeft > 30) {
                            setTimeLeft(TimeLeft => TimeLeft - 30)
                        }
                    }} className="inline-flex shadow-md items-center justify-center whitespace-nowrap rounded-md text-sm bg-blue-800 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2  text-white">
                        -30s
                    </button>
                    <button onClick={closeRestTimer} className="inline-flex shadow-md mx-8 bg-blue-800 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2  text-white">
                        Skip
                    </button>
                    <button onClick={() => setTimeLeft(TimeLeft => TimeLeft + 30)} className="shadow-md inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm bg-blue-800 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2  text-white">
                        +30s
                    </button>
                    
                </div>
            </div>
        </>
    );
}

export default RestTimer;
