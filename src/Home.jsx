import './App.css'
import { Link } from 'wouter';
import i1 from './assets/i.svg';
import i2 from './assets/o.svg';
function Home() {
    return (
         <>
         <div className="Wrapper">
            {/* <img className='z-50' src={i1} alt="" /> */}
            <header>
                <nav>
                    <ul className='flex cursor-pointer gap-x-5 p-5'>
                        <Link to="">
                            <li>Home</li>
                        </Link>
                        <li>About</li>
                        <li>Routine</li>
                        <li>Contact Us</li>
                        
                    </ul>
                </nav>
            </header>
            <div className="Hero flex-col items-center gap-y-5">
                <h1 className='text-6xl mt-20 bold text-center '>Workouts Tracking On Web Made Easier</h1>
                <div className="ButtonsGroup">
                    {/* <button className='bg-black shadow-lg text-white p-3 rounded-lg'>Use Recommendec Routine</button> */}
                    <Link href='/app/create'><button className='bg-black shadow-lg ml-10 text-white p-3 rounded-lg'>Create Your Own Workout</button></Link>
                </div>

            </div>
         </div>
         </> 
    );
}

export default Home;