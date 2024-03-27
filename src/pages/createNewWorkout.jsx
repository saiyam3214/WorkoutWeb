import React, { useEffect, useRef, useState } from "react";
import ChangeIcon from '../assets/change.svg'
import "../index.css"
import Modal from "../component/Modal";
import ExCard from "../component/ExCard";
import Card from "../component/rowCard";
import { Link } from "wouter";
import RestTimer from "../component/RestTimer";

function CreateNewWorkout() {
    const [workoutName,setWorkoutName] = useState("");
    const [IsRestTimerHidden, setIsRestTimerHidden] = useState(true);
    const [isHidden, setIsHidden] = useState(true);
    const [workoutData, setWorkoutData] = useState([]);
    const [restTime,setRestTime] = useState(null);
    const getWorkoutData = () => {
        const data = localStorage.getItem("workoutData");
        if(data){
            setWorkoutData(JSON.parse(data));
        }
    }
    useEffect(() => {
        setWorkoutName(prompt("Enter Workout Name"));
        getWorkoutData();
        console.log(workoutData)
    },[])
    const handleFinish = () => {
        const saveWorkout = prompt("Want To Save Workout? Yes/No")
        if(saveWorkout.toLowerCase() !== "no"){
            localStorage.setItem("workoutData",JSON.stringify(workoutData));
        }
    }
    const openRestTimer = () => {
        setIsRestTimerHidden(false);
    }
    const handleCloseRestTimer = () => {
        setIsRestTimerHidden(true);
    }
    const handleAddExercise = () => {
        setIsHidden(false);
    };
    const closeModal = () => {
        setIsHidden(true)
    }
    return (
        <>
            <div className="App">
                <div className="bg-white p-4">
                    <RestTimer restTime={restTime} closeRestTimer={handleCloseRestTimer} isHidden={IsRestTimerHidden}></RestTimer>
                    <Modal isHidden={isHidden} Data={workoutData} setData={setWorkoutData} closeModal={closeModal} ></Modal>
                    <div className="flex justify-between items-center mb-4">
                        <Link href="/app">
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-transparent text-black">
                                Cancel
                            </button>
                        </Link>
                        <h1 className="text-xl text-center  ml-[12.5rem] font-semibold">{workoutName}</h1>
                        <div className="TwoButtons">
                            <button onClick={handleAddExercise} className="inline-flex mx-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#1c3c86] text-white">
                                Add Excercise
                            </button>
                            <Link href="/app">
                                <button onClick={handleFinish} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#10B981] text-white">
                                    Finish
                                </button>
                            </Link>
                        </div>
                    </div>
                    {workoutData.length == 0  ? <h1 className="font-medium text-3xl my-[30vh] text-center">Nothing Here...</h1> : <div className="Excercise_Title">
                        {workoutData?.map((excerciseData) => {
                            return <ExCard setRestTime={setRestTime} restTime={excerciseData.restTime}  name={excerciseData.name} openRestTimer={openRestTimer} reps={excerciseData.reps} setsCount={excerciseData.setsCount} weight={excerciseData.weight}></ExCard>
                        })}
                    </div>}

            </div>


            </div>
        </>
    );
}

export default CreateNewWorkout;
