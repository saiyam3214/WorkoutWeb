import { useEffect } from "react";
import { useState } from "react";

function RestTimer({isHidden, restTime, closeRestTimer}) {
    if(isHidden){
        return null;
    }
    let interval;
    console.log(restTime);
    const [TimeLeft, setTimeLeft] = useState(restTime);
    useEffect(() => {
        console.log(TimeLeft + " time left bro");
        startTimer();
        return () => clearInterval(interval);
    });
    const handlePlayAudio = () => {
        
    }
    const startTimer= () => {
        interval = setInterval(() => {
            if(TimeLeft > 0){
                setTimeLeft(TimeLeft => TimeLeft - 1);
            }else{

                clearInterval(interval);
                closeRestTimer();
            }
        }, 1000);
    }



    return ( 
        <>
        <div className="RestTimer mx-[50vh] flex-col w-[110vh] bg-gray-200 p-4 h-[80vh]  flex justify-center items-center rounded fixed m-12 shadow-2xl">
            <b><h1 className="text-2xl mb-6">Rest Timer</h1></b>
            <div className="Timer flex mb-10 mt-3 justify-center items-center w-32 h-32 rounded-[20vh] border-[10px] border-blue-500 bg-gray-100 ">
                <h1 className="font-bold text-2xl ">{TimeLeft}</h1>
            </div>
            <div className="btnRow ">
                <button onClick={closeRestTimer} className="inline-flex mx-8 bg-blue-800 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2  text-white">
                    Skip
                </button>
                <button onClick={() => setTimeLeft(TimeLeft => TimeLeft + 30)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm bg-blue-800 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2  text-white">
                    +30s
                </button>
            </div>
        </div>
        </>
    );
}

export default RestTimer;
