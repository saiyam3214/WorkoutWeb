import {Route,Router} from 'wouter'
import Home from './pages/Home';
import CreateNewWorkout from './pages/createNewWorkout';
import './App.css'
import { Analytics } from "@vercel/analytics/react"
import SavedWorkouts from './pages/savedWorkouts';
function App(){
  return (
    <>
    <div className="APp">
        <Route path='/' component={Home}></Route>
        <Route path='/create/:name'>{params => <CreateNewWorkout name={params.name}></CreateNewWorkout>}</Route>
        <Route path='/saved/' component={SavedWorkouts}></Route>
        <Route component={CreateNewWorkout} path='/create'></Route>
        <Route path='/login'></Route>
        <Analytics/>
    </div>
    </>
  )
}
export default App;