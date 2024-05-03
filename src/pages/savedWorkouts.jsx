import { useEffect, useState } from "react";
import List from '../assets/list.svg'
import { Link } from "wouter";
function SavedWorkouts() {
    const [SavedWorkouts, setSavedWorkouts] = useState([]);
    const handleLocalStorage = () => {
        const loadedRawData = { ...localStorage };
        const keys = Object.keys(loadedRawData);
        setSavedWorkouts(keys);
        console.log(keys)
    }

    const clearStorage = () => {
        // localStorage.clear();
        alert("clear stroafe comes soon")
    }
    useEffect(() => {
        handleLocalStorage();
    }, [])
    return (
        <>
            <div className="wrapper p-20 flex  bg-gray-50 h-[100vh]">
                <div className="HeroLeft">
                    <div className="flex">
                        <h1 className="font-bold text-4xl">Saved Workouts</h1>
                        <button onClick={clearStorage} className='bg-black shadow-lg w-36 h-[3rem] mx-10 text-white p-3 rounded-lg'>Clear Storage</button>
                    </div>
                    {SavedWorkouts.map((name) => {
                        return WorkoutNameCard(name);
                    })}
                </div>


            </div>
        </>
    );

    function WorkoutNameCard(WorkoutName) {
        return <Link href={"/create/"+WorkoutName.trim()}>
            <div className="Workout__Card rounded-xl p-4 font-extrabold my-5 shadow-md cursor-pointer bg-gray-100 h-fit w-[23rem]">
                <h1 className="font-bold">{WorkoutName}</h1>
            </div>
        </Link>;
    }
}

export default SavedWorkouts;