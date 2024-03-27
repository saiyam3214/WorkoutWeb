import {Route} from 'wouter'
import Home from './Home';
import CreateNewWorkout from './pages/createNewWorkout';
function App(){
  return (
    <>
    <div className="APp">
      <Route path='/app' component={Home}></Route>
      <Route path='/app/create'><CreateNewWorkout></CreateNewWorkout></Route>
    </div>
    </>
  )
}
export default App;