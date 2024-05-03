import { useRef } from 'react';
import '../index.css'

function Modal({ isHidden, closeModal, Data, setData }) {
    if (isHidden) {
        return null; // Hide the modal when isHidden is true
    }
    const ExcerciseRef = useRef({
        name: "",
        restTime: "",
        reps: "",
        weight: " -- ",
        setsCount: 1,
    })
    const addNewExcercise = () => {
        if(!(ExcerciseRef.current.name === "" || ExcerciseRef.current.restTime === "" || ExcerciseRef.current.reps === "")){
            let alreadyExists;
            Data.forEach(element => {
                console.log(element);
                if(element == ExcerciseRef.current.name){
                    alreadyExists = true;
                }else{
                    alreadyExists = false;
                }
            });
            if(!alreadyExists){
                setData([...Data, ExcerciseRef.current]);
                closeModal();
            }
        }else{
            alert("Please Fill Up All Details!")
        }

    }
    return (
        <>
            <div className="ModalWrapperParent">
                <div className="ModalWrapper h-fit flex-col w-[70vh] bg-gray-50 mx-[12%] p-4 rounded fixed m-12 shadow-xl">
                    <h1 className="font-medium text-xl text-center">Add Exercise</h1>
                    <div className="Modal__Content flex justify-center items-center ">
                        <div className="InputFields flex-col ">
                            <div className="InputDivs my-3 flex-col">
                                <label className='m-2 text-md mb-5 ' htmlFor="name">Execrsize Name</label>
                                <input onChange={(e) => {
                                    ExcerciseRef.current.name = e.target.value;
                                }} name='name' className='mainInput mt-2 p-1 rounded outline-none text-md' type="text" placeholder='eg- Pushups' />
                            </div>
                            <div className="Input_Div_2 my-4">
                                <label className='m-1 text-md my-3 ' htmlFor="rest">
                                    Rest Time In Seconds
                                </label>
                                <input onChange={(e) => {
                                    ExcerciseRef.current.restTime = e.target.value;
                                }} name='rest' className='mainInput mt-2 p-1 rounded outline-none text-md' type="number" placeholder='60 Seconds' />
                            </div>
                            <div className="Input_Div_3 my-3">
                                <label className='m-1 text-md ' htmlFor="reps">
                                    Repetitions
                                </label>
                                <input onChange={(e) => {
                                    ExcerciseRef.current.reps = e.target.value;
                                }} name='reps' className='mainInput p-1 rounded outline-none mt-2 text-md' type="number" placeholder='8' />
                            </div>
                        </div>
                    </div>

                    <button onClick={addNewExcercise} className='bg-black text-white rounded w-20 mx-auto my-4 h-9'>Create</button>
                </div>
            </div>
        </>
    );
}

export default Modal;
