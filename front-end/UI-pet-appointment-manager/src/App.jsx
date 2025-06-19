import './App.css'
import AppointmentDetailsView from './components/AppointmentComponent/AppointmentDetails/AppointmentDetailsView';
import HomeView from './components/Home/HomeView';
import NavBarView from './components/NavBarComponent/NavBarView'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="navbar-container p-0">
          <NavBarView/>
        </div>
        <div className="col">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomeView/>}/>
              <Route path='/appointment/details/:id' element={<AppointmentDetailsView/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div> 
    </div>
  )
}

export default App
