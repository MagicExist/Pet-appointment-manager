import { useEffect,useState } from "react";
import axios from 'axios'
import './Appointments.css'

export default function AppointmentView(){

    const [appointments,setAppointmets] = useState([])

    const priorityColors = {
        low:'#27ae60',
        medium:'#f39c12',
        high:'#e74c3c'
    }
    const url = 'http://127.0.0.1:8000/api/appointments/'
    useEffect(()=>{
        axios.get(url)
            .then(response => {
                setAppointmets(response.data)
            })
            .catch(err => {
                console.warn(err)
            })
    },[])

    return(
        <>
            <div className="row flex-column p-2 main-container rounded-2">
                <div className="col col-12 mt-2 mb-2">
                    <div className="row appointmentHeader">
                        <p className="priorityContainer"></p>
                        <p className="col d-flex align-items-center">ID</p>
                        <p className="col d-flex align-items-center">Procedure</p>
                        <p className="col d-flex align-items-center">Date</p>
                        <p className="col d-flex align-items-center">Time</p>
                        <p className="col-1 d-flex align-items-center">Options</p>
                    </div>
                </div>
                
                {appointments.map((appointment)=>(
                    <div id={appointment.id} className="col col-12 mb-4" key={appointment.id}>
                        <div className="row flex-row appointmentCard m-0">
                            <div className="priorityContainer p-0" 
                                style={{backgroundColor: priorityColors[appointment.priority]}}
                            ></div>
                            <div className="col d-flex">
                                <div className="d-flex flex-column align-items-center">
                                    <p>{appointment.id}</p>
                                    <p>{appointment.priority}</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-center">
                                <p>{appointment.procedure}</p>
                            </div>
                            <div className="col d-flex align-items-center">
                                <p className="w-100">{appointment.date}</p>
                            </div>
                            <div className="col d-flex align-items-center">
                                <p className="w-100">{appointment.time}</p>
                            </div>
                            <div className="col col-1 d-flex align-items-center">
                                <button type="button" className="btn option-btn">
                                    <img src="../../public/appointmentOptions.svg" alt="Botón" className="img-fluid"></img>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}