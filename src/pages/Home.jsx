import '../App.css'
import { Link } from 'wouter';
function Home() {   
    return (
        <>
            <div className="Wrapper">
                {/* <img className='z-50' src={i1} alt="" /> */}
                <header>
                    <nav>
                        <ul className='flex cursor-pointer gap-x-5 p-5'>
                            <Link href='/'>
                                <li>Home</li>
                            </Link>
                            <Link href='/saved'>
                                <li>Saved Workouts</li>
                            </Link>
                            <Link href='/logs'>
                                <li>Logs</li>
                            </Link>
                            <li>Contact Us</li>

                        </ul>
                    </nav>
                </header>
                <div className="Hero flex-col items-center px-4  gap-y-5">
                    <h1 className='text-7xl max-md:text-2xl leading-snug  mt-20 font-medium text-center '>Home Workouts On Web Made Easier</h1>
                    <h2 className='text-[#666666] text-xl leading-normal'>Get fit from home using your computer effortlessly</h2>
                    <div className="ButtonsGroup">
                        {/* <button className='bg-black shadow-lg text-white p-3 rounded-lg'>Use Recommendec Routine</button> */}
                        <Link  href='/create'><button  className='bg-black shadow-lg ml-4 text-white p-3 rounded-lg'>Create Your Own Workout</button></Link>
                        <Link  href='/saved'><button  className='bg-black shadow-lg ml-4 font-extralight text-white p-3 rounded-lg'>Saved Workouts</button></Link>
                    </div>

                </div>
                <footer class="footer bg-white text-black font-light  py-4 fixed bottom-0 w-full">
                    <p class="text-center">Made by Saiyam Saini</p>
                </footer>
            </div>
        </>
    );
}

export default Home;