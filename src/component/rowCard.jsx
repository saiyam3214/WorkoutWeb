import {useRef,useState} from 'react'

function RowCard({ index, weight, reps , openRestTimer , restTime, setRestTime }) {
    // const checkBoxRef = useRef();
    console.log(restTime + " YO");
    const [isChecked,setIsChecked] = useState(false);
    const handleCheckBox = () => {
        if(!isChecked){
            setIsChecked(true);
        }

    }
    return (
        <>
            <div className="Card__Wrapper">
                <div className="set__Div text-center flex justify-between items-center m-3 px-3 ">
                    <h1 className="text-center">{index + 1}</h1>
                    <h1 className="mx-7">{weight}</h1>
                    <h1>{reps}</h1>
                    <div className="relative inline-block">
                        <input onChange={handleCheckBox} onClick={() => { 
                            setRestTime(restTime);
                            openRestTimer();
                        }} className='p-2 w-4 h-4 bg-gray-300' checked={isChecked}  type="checkbox" id="checkbox"  />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RowCard;