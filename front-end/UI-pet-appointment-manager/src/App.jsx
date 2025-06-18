import './App.css'
import AppointmentView from './components/AppointmentComponent/AppointmentsView'
import NavBarView from './components/NavBarComponent/NavBarView'

function App() {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="navbar-container p-0">
          <NavBarView/>
        </div>
        <div className="col">
          <AppointmentView/>
        </div>
      </div> 
    </div>
  )
}

export default App
