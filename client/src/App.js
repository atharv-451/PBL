//import logo from './logo.svg';
import './App.css';
import {Route , BrowserRouter} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import BookingCar from './pages/BookingCar';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        
            <Route path='/' exact component={Home}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/bookingcar' exact component={BookingCar}/>

        </BrowserRouter>

    </div>
  );
}

export default App;
