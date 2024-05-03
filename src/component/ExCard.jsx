import { useState } from "react";
import RowCard from "./rowCard";
function ExCard({ name, weight, reps, setsCount, restTime ,openRestTimer , setRestTime }) {
    const [currentSetCount, setCurrentsetCount] = useState(setsCount);
    const addNewSet = () => {
        setCurrentsetCount(currentSetCount + 1);
    }
    const rowSets = [];
    for (let index = 0; index < currentSetCount; index++) {
        rowSets.push(<RowCard setRestTime={setRestTime} restTime={restTime}  openRestTimer={openRestTimer} index={index} weight={weight} reps={reps} />);
    }
    return (
        <>
            <div className="ExCard__Wrapper bg-gray-200 h-fit  pt-1 shadow-md  mb-4 rounded ">
                <h1 className="text-lg font-bold mx-4 mt-2 mb-5">{name}</h1>
                <div className="Sets bg-gray-100 p-2 rounded">
                    <div className="Row__Titles flex justify-between items-center mx-3 ">
                        <span className="text-md font-semibold">Set</span>
                        <span className="text-md font-semibold">Weight</span>
                        <span className="text-md font-semibold">Reps</span>
                        <span className="text-md font-semibold"></span>
                    </div>
                    {rowSets}
                    <button onClick={addNewSet} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-transparent text-[#10B981] w-full"> + New Set</button>
                </div>
            </div>
        </>
    );
}

export default ExCard;