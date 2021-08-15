import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,sign_in} from './actions'
import TopNav from './Components/TopNav/TopNav';
import DownNav from './Components/DownNav/DownNav';
import Home from './Pages/Home/Home';
import CreatePost from './Pages/CreatePost/CreatePost';
import SingleView from './Pages/SingleView/SingleView';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import UserProfile from './Pages/UserProfile/UserProfile';

const Routing =()=>{
  // const counter =useSelector(state => state.counter)
  // const isLogged = useSelector(state => state.isLogged)
  // console.log(counter,isLogged);
  // const dispatch = useDispatch( );
  
  return (
    <Switch>
      <Route exact path="/">
         <Home/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/signup'>
         <Register/>
      </Route>
      <Route exact path='/profil'>
        {/* <Profile/> */}
      </Route>
      <Route path='/create'>
        <CreatePost/>
      </Route>
      <Route path='/profile'>
        <UserProfile/>
      </Route>
      <Route path='/viewnews'>
        <SingleView></SingleView>
      </Route>
    </Switch>
  )
}

function App() {
  
  return (
    <BrowserRouter> 
      <TopNav/>
      <DownNav/>
      <Routing/>
    </BrowserRouter>
  );
}

export default App;

