import React, { useEffect, useRef, useState } from "react";
import ChangeIcon from '../assets/change.svg'
import "../App.css"
import Modal from "../component/Modal";
import ExCard from "../component/ExCard";
import Card from "../component/rowCard";
import { Link, useParams } from "wouter";
import RestTimer from "../component/RestTimer";

function CreateNewWorkout({name}) {
    const [workoutName, setWorkoutName] = useState();
    const [IsRestTimerHidden, setIsRestTimerHidden] = useState(true);
    const [isHidden, setIsHidden] = useState(true);
    const [workoutData, setWorkoutData] = useState([]);
    const [restTime, setRestTime] = useState(null);
    // const getWorkoutData = () => {
    //     const data = localStorage.getItem(workoutName);
    //     if (data) {
    //         setWorkoutData(JSON.parse(data));
    //     }
    // }
    useEffect(() => {
        if (name == undefined){
            const s = prompt("Enter Workout Name");
            setWorkoutName(s);
        }else{
            LoadSavedWorkout();
        }

    }, [])
    const LoadSavedWorkout = () => {
        const data = JSON.parse(localStorage.getItem(name))
        if(data){
            setWorkoutData(data)
        }
    }
    const handleFinish = () => {
        const saveWorkout = prompt("Want To Save Workout? y/n")
        if (saveWorkout.toLowerCase() !== "n" && workoutData.length != 0) {
            localStorage.setItem(workoutName, JSON.stringify(workoutData));
        }else{
            alert("Add a excercise")
        }
    }
    const openRestTimer = () => {
        setIsRestTimerHidden(false);
        backgroundRef.current.classList.toggle("filter")
        backgroundRef.current.classList.toggle("blur-sm")
        backgroundRef.current.scroll = "no";
    }
    const handleCloseRestTimer = () => {
        setIsRestTimerHidden(true);
        backgroundRef.current.classList.toggle("blur-sm")
        backgroundRef.current.scroll = "yes";
    }
    const handleAddExercise = () => {
        backgroundRef.current.classList.add("filter")
        backgroundRef.current.classList.add("blur-sm")
        setIsHidden(false);
    };
    const closeModal = () => {
        backgroundRef.current.classList.remove("filter")
        backgroundRef.current.classList.remove("blur-sm")
        setIsHidden(true);
    }
    const handleTime = () => {
        const date = new Date()
        return (date.getHours() - 12) + ":" + date.getMinutes();
    }
    const backgroundRef = useRef();
    return (
        <>
            <RestTimer restTime={restTime} closeRestTimer={handleCloseRestTimer} isHidden={IsRestTimerHidden}></RestTimer>
            <Modal isHidden={isHidden} Data={workoutData} setData={setWorkoutData} closeModal={closeModal} ></Modal>
            <div ref={backgroundRef} className="App">
                <div className="bg-white p-4">
                    <div className="flex justify-between items-center mb-4">
                        <Link href="/">
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-transparent text-black">
                                Cancel
                            </button>
                        </Link>
                        <h1 className="text-xl text-center  ml-[12.5rem] font-semibold">{workoutName}</h1>
                        <div className="TwoButtons flex items-center">
                            <h1 className="font-semibold text-lg">{handleTime() + " PM"}</h1>
                            <button onClick={handleAddExercise} className="inline-flex mx-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#1c3c86] text-white">
                                Add Excercise
                            </button>

                            <Link href="/">
                                <button onClick={handleFinish} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#10B981] text-white">
                                    {workoutName == undefined ? "End" : "Finish"}
                                </button>
                            </Link>
                        </div>
                    </div>
                    {workoutData.length == 0 ? <h1 className="font-medium text-3xl my-[30vh] text-center">Nothing Here...</h1> : <div className="Excercise_Title">
                        {workoutData?.map((excerciseData) => {
                            return <ExCard setRestTime={setRestTime} restTime={excerciseData.restTime} name={excerciseData.name} openRestTimer={openRestTimer} reps={excerciseData.reps} setsCount={excerciseData.setsCount} weight={excerciseData.weight}></ExCard>
                        })}
                    </div>}

                </div>


            </div>
        </>
    );
}

export default CreateNewWorkout;
